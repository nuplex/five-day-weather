import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import {getDayName} from "./util";
import './WeatherInfo.css';

/**
 * Shows weather for an individual day.
 */
class WeatherInfo extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            showDetails: false
        };

        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails(){
        let opposite = !this.state.showDetails;
        this.setState({
            showDetails: opposite
        });
    }

    render() {
        const { showDetails } = this.state;
        const {
            day,
            index,
            degConvert,
        } = this.props;

        return (
            <div className={index === 0 ? "weather-info--today" : "weather-info"}>
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
                {showDetails &&
                    <div className="wi-details">
                        <span>Humidity: {day.details.humidity}%</span>
                        <br/>
                        <span>Wind: {Math.round(day.windDetails.speed * 3600 / 1610.3)}<span className="wi-mph">mph</span></span>
                        <br/>
                        <span>Cloudiness: {day.cloudsDetails.all}%</span>
                        <br/>
                        <span>Pressure: {Math.round(day.details.grnd_level)}hPa</span>
                    </div>
                }
                <button
                    className="wi-showDetails-btn"
                    onClick={this.toggleDetails}
                >{!showDetails ? "Show Details":"Hide Details"}
                </button>
            </div>
        );
    }
}

WeatherInfo.propTypes = {
    /* contains the weather data for this day */
    day: PropTypes.shape({}).isRequired,
    /* index from mapping */
    index: PropTypes.number,
    /* converts the degrees */
    degConvert: PropTypes.func.isRequired,
};

export default WeatherInfo;
