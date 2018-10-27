import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import {getDayName} from "./util";
import './WeatherInfo.css';

/**
 * Shows weather for an individual day.
 */
function WeatherInfo({day, index, sendDetails, degConvert}){

    return (
        <div className={index === 0 ? "weather-info--today":"weather-info"}>
            <div className="weather-date">
                {index === 0 ?
                    <p className="wi-today-text">Today</p>
                    :
                    <p>{getDayName(day.dateObject.getDay())}</p>
                }
                <span>{day.dateObject.getMonth() + 1}/</span>
                <span>{day.dateObject.getDate()}</span>
            </div>
            <div className="weather-icon-cont">
                <WeatherIcon weatherID={day.weatherData.id}/>
                <p className="weather-desc--short">{day.weatherData.main}</p>
                <p className="weather-desc--long">{day.weatherData.description}</p>
            </div>
            <p className="temp temp--high">{degConvert(day.high)}°</p>
            <p className="temp temp--low">{degConvert(day.low)}°</p>
            <button
                className="wi-sendDetails-btn"
                onClick={() => (sendDetails(day.details))}
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
    /* converts the degrees */
    degConvert: PropTypes.func.isRequired,
};

export default WeatherInfo;
