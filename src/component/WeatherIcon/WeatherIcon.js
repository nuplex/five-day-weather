import React from 'react';
import PropTypes from 'prop-types'
import clear from '../../res/img/clear.svg';
import cloudy from '../../res/img/cloudy.svg';
import few_clouds from '../../res/img/few_clouds.svg';
import fog from '../../res/img/fog.svg';
import rain from '../../res/img/rain.svg';
import scattered_clouds from '../../res/img/scattered_clouds.svg';
import showers from '../../res/img/showers.svg';
import snow from '../../res/img/snow.svg';
import thunderstorms from '../../res/img/thunderstorm.svg';

/**
 * This component gets the icon for the corresponding weather condition using the weather ID.
 */
function WeatherIcon({weatherID}) {
    let svg = null;
    let alt = '';

    switch(weatherID){
        //all in this range are thunderstorms and use the same icon
        case weatherID >= 200 && weatherID <= 232:
            svg = {thunderstorms};
            alt = 'thunderstorms';
            break;
        //drizzles, shower rain
        case weatherID >= 300 && weatherID <= 321:
        case weatherID >= 520 && weatherID <= 531:
            svg = {showers};
            alt = 'showers';
            break;
        //non-shower rain
        case weatherID >= 500 && weatherID <= 504:
            svg = {rain};
            alt = 'rain';
            break;
        //freezing rain, snow
        case weatherID === 511:
        case weatherID >= 600 && weatherID <= 622:
            svg = {snow};
            alt = 'snow';
            break;
        //atmosphere (aka fog, mist, volcanic ash, etc.)
        case weatherID >= 701 && weatherID <= 781:
            //in their icon chart, 50d or 'mist' (I called it fog) is used for all of these
            svg = {fog};
            alt = 'fog';
            break;
        //clear
        case weatherID === 800:
            svg = {clear};
            alt = 'clear';
            break;
        //clouds
        case weatherID === 801:
            //few clouds
            svg = {few_clouds};
            alt = 'few clouds';
            break;
        case weatherID === 802:
            //scattered clouds
            svg = {scattered_clouds};
            alt = 'scattered clouds';
            break;
        case weatherID === 803|| weatherID === 804:
            //overcast or broken clouds
            svg = {cloudy};
            alt = 'cloudy';
            break;
        default:
            //default to the clear icon
            svg = {clear};
            alt = 'weather icon';

    }

    return (
        <img className={"weather-icon"} src={svg} alt={alt}/>
    )
}

WeatherIcon.propTypes = {
    weatherID: PropTypes.number.isRequired
};

export default WeatherIcon;