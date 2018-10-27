const resolveInputType = (locationString) => {
    if(!locationString){
        //This should not happen, LocationInput.js checks this, but lets handle it anyway
        throw Error('Location was empty.');
    }

    const firstChar = locationString.trim().charAt(0);
    /* Basic Resolving
     * City -> First char is always a letter, we will also default to this for all other chars (an error will be thrown
     * later)
     * US Zip Code -> First char is a number
     * Lat-Long -> First char is a + or a -
     * */
    if(firstChar.match(/[A-Za-z]/)){
        return 'city';
    } else if (firstChar.match(/[0-9]/)){
        return 'zip';
    } else if (firstChar.match(/\+|-/)) {
        return 'latlong';
    } else {
        return 'city';
    }

};

const formatCityCountry = (locationString) => {
    const cityCountryRE = /\s*([A-Za-z]*(?:\s*[A-Za-z]*)*)\s*(?:,+\s*([A-Za-z]{2,3}))*/g;
    const matches = cityCountryRE.exec(locationString);
    //get rid of all spacing anywhere EXCEPT in city names (e.g. New York)
    const cityToken = matches[1].replace(/\s+\s*/g,' ').replace(/\s/g,'+'); //OWM uses '+' for space
    const countryToken = matches[2];

    return `${cityToken}${countryToken ? ','+countryToken:''}`;
};



/**
 * Gets the raw forecast data and returns in a better form for the app's purposes
 * @param locationString - what was entered into the input field
 * @returns Object
 */
const getForecast = async (locationString) => {
    const type = resolveInputType(locationString);
    let formatted = locationString;
    switch(type){
        default:
        case 'city':
            formatted = formatCityCountry(locationString);
            break;
        case 'zip':
            formatted = locationString.trim();
            break;
        case 'latlong':
            formatted = locationString.trim();
            //latlong will be parsed into separate args server side (results in less conditional logic)
            break;
    }

    const headers = {
      'Content-Type': 'application/json'
    };

    const options = {
        method: 'GET',
        headers,
    };

    const res =
        await fetch(`/api/getWeatherData/getFiveDay?type=${type}&loc=${formatted}`, options);
    const data = await res.json();

    //OWM can send back errors even if it responds with 200
    if(data && data.cod){
        if(data.cod === "404"){
            //This will be handled differently, so don't throw it as an error.
            return {
                error: 'City not found',
                errorCode: '404'
            }
        }
    } else {
        throw Error('data or data.cod was undefined');
    }
    const keyData = getKeyData(data);

    if(!keyData) {
        throw Error('keyData was undefined');
    } else if (keyData.days.length === 0){
        throw Error('There were no days to extract');
    } else {
        return keyData;
    }
};

/**
 * Retrieves key data and formats it for only what the app needs.
 * @param data - Forecast data
 */
const getKeyData = (data) => {
    const desired = {
        city: data.city.name,
        country: data.city.country,
        days: []
    };

    const list =  data.list;

    //for tracking the avg high
    let currHigh = Number.MIN_VALUE;
    //for tracking the avg low
    let currLow = Number.MAX_VALUE;
    //for getting a sample of overall weather for the day, an hour between 11am - 3pm
    /* Due to the ugliness of timezones, it's easier to select from a range,
       rather than a specific point. Unfortunately OWM sends in the timestamp as Unix UTC,
       in seconds, adjusted for whatever timezone its in.
     */
    let currDayPoint = null;

    list.forEach((dayTime, index, array) => {
        const lastDayTime = index === array.length - 1;
        const ThreeHrsAsMs = 10800000;
        const currDayInMS = ((dayTime.dt) * 1000);
        const currDate = new Date(currDayInMS);
        const currDayOfMonth = currDate.getDate();
        const currHour = currDate.getHours();
        const nextDayTimeIsDiffDay = (new Date(currDayInMS + ThreeHrsAsMs)).getDate() !== currDayOfMonth;
        const todayIsPastDayPointRange = currHour > 15;
        const todayIsBeforeDayPointRange = currHour < 11;

        //do NOT set high and low if the current time is on a different day, unless this is the last dayTime
        if((!lastDayTime && !nextDayTimeIsDiffDay) || lastDayTime){
            // set high and low
            currHigh = currHigh > dayTime.main.temp ? currHigh:dayTime.main.temp;
            currLow = currLow < dayTime.main.temp ? currLow:dayTime.main.temp;
        }

        //set the noon point
        /* English of below conditional (its a bit confusing):
           If the current noon data has not been set, then set it if:
             A: the current dayTime is between 11am - 3pm
             B: it's not set and the time is past 11am - 3pm
             C: it's not set, this is the last dayTime, and 11am - 3pm has not happened yet
         */

        if(!currDayPoint && ((currHour >= 11 && currHour <= 15)
            || todayIsPastDayPointRange
            || (lastDayTime && todayIsBeforeDayPointRange)) ){
            currDayPoint = dayTime;
        }

        //check if 3 hours from now is a different day, or if we're on the last thing in the array.
        if(nextDayTimeIsDiffDay || lastDayTime) {
            /* now it's time to push the final day object */
            let day = {
                high: currHigh,
                low: currLow,
                weatherData: currDayPoint.weather[0],//is sn array for some reason
                /* excess information, also gathered at noon, from 'main' */
                details: currDayPoint.main,
                /* for easy access later */
                dateObject: currDate,
            };


            if(nextDayTimeIsDiffDay && !lastDayTime) {
                desired.days.push(day);
            }

            /* reset values */
            currHigh = Number.MIN_VALUE;
            currLow = Number.MAX_VALUE;
            currDayPoint = null;
        }
    });

    return desired;
};

export {getForecast};