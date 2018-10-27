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
import './WeatherIcon.css';

/**
 * This component gets the icon for the corresponding weather condition using the weather ID.
 */
function WeatherIcon({weatherID}) {
    let svg = null;
    let alt = '';

    if (weatherID >= 200 && weatherID <= 232) {
        //all in this range are thunderstorms and use the same icon
        svg = thunderstorms;
        alt = 'thunderstorms';
    } else if (
        (weatherID >= 300 && weatherID <= 321) ||
        (weatherID >= 520 && weatherID <= 531)) {
        //drizzles, shower rain
        svg = showers;
        alt = 'showers';
    } else if (weatherID >= 500 && weatherID <= 504) {
        //non-shower rain
        svg = rain;
        alt = 'rain';
    } else if (weatherID === 511 || (weatherID >= 600 && weatherID <= 622)) {
        //freezing rain, snow
        svg = snow;
        alt = 'snow';
    } else if (weatherID >= 701 && weatherID <= 781) {
        //atmosphere (aka fog, mist, volcanic ash, etc.)
        //in their icon chart, 50d or 'mist' (I called it fog) is used for all of these
        svg = fog;
        alt = 'fog';
    } else if (weatherID === 800) {
        //clear
        svg = clear;
        alt = 'clear';
    } else if (weatherID === 801) {
        //few clouds
        svg = few_clouds;
        alt = 'few clouds';
    } else if (weatherID === 802) {
        //scattered clouds
        svg = scattered_clouds;
        alt = 'scattered clouds';
    } else if (weatherID === 803 || weatherID === 804) {
        //overcast or broken clouds
        svg = cloudy;
        alt = 'cloudy';
    } else {
        //default to the clear icon
        svg = clear;
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
