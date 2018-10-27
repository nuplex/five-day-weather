import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import {getDayName} from "./util";
import './WeatherInfo.css';

function WeatherInfo({day, index, sendDetails}){

    return (
        <div className="weather-info">
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
            </div>
            <p className="temp temp--high">{day.high}</p>
            <p className="temp temp--low">{day.low}</p>
            <p className="weather-desc--long">{day.weatherData.description}</p>
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
