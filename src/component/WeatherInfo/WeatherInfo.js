import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

function WeatherInfo({day, index, sendDetails}){
    return (
        <div className="weather-info" key={day.dateObject.getTime()}>
            <div className="weather-date">
                {index === 0 &&
                    <p>Today</p>
                }
                <span>{day.dateObject.getMonth() + 1},&nbsp;</span>
                <span>{day.dateObject.getDate()}</span>
            </div>
            <div className="weather-icon-cont">
                <WeatherIcon weatherID={day.weather.id}/>
                <p className="weather-desc--short">{day.weather.main}</p>
            </div>
            <p className="temp temp--high">{day.high}</p>
            <p className="temp temp--low">{day.low}</p>
            <p className="weather-desc--long">{day.weather.description}</p>
            <button
                className="wi-sendDetails-btn"
                onClick={sendDetails(day.details)}
            >Show Details</button>
        </div>
    );
}

WeatherInfo.propTypes = {
    /* contains the weather data for this day */
    day: PropTypes.shape({}).isRequired,
    /* index from mapping */
    index: PropTypes.number,
    /* to send details upward to be shown in the parent component */
    sendDetails: PropTypes.func,
};

export default WeatherInfo;