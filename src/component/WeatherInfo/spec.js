import React from 'react';
import { shallow } from 'enzyme';
import WeatherInfo from './WeatherInfo';
import { testWeatherData } from "../../util/testWeatherData";

describe('WeatherInfo', () => {
   it('renders without crashing', ()=>{
       shallow(<WeatherInfo day={testWeatherData.days[0]} degConvert={(deg) => (deg)}/>)
   });

   it('has the correct metadata for a given day', ()=>{
       const wrapper = shallow(
           <WeatherInfo
               day={testWeatherData.days[1]}
               degConvert={(deg) => (Math.round(((deg-273.15)*1.8)+32))}
           />);
       expect(wrapper.find('.weather-date p').text()).toBe('Sunday');
       expect(wrapper.find('.weather-date span').at(0).text()).toBe('10/');
       expect(wrapper.find('.weather-date span').at(1)); //make sure only that it exists; for some reason an object is returned if you do .text()
       expect(wrapper.find('WeatherIcon').length).toBe(1);
       expect(wrapper.find('.weather-desc--short').text()).toBe('Rain');
       expect(wrapper.find('.weather-desc--long').text()).toBe('light rain');
       expect(wrapper.find('.temp--high').text()).toBe('49°');
       expect(wrapper.find('.temp--low').text()).toBe('43°');
   });

    it('can show and hide details and has correct details', ()=>{
        const wrapper = shallow(
            <WeatherInfo
                day={testWeatherData.days[1]}
                degConvert={(deg) => (deg)}
            />);
        expect(wrapper.find('.wi-details').length).toBe(0);
        wrapper.find('.wi-showDetails-btn').simulate('click');
        expect(wrapper.find('.wi-details').length).toBe(1);
        expect(wrapper.find('.wi-details span').at(0).text()).toBe('Humidity: 94%');
        expect(wrapper.find('.wi-details span').at(1).text()).toBe('Wind: 7mph');
        expect(wrapper.find('.wi-details span').at(3).text()).toBe('Cloudiness: 56%');
        expect(wrapper.find('.wi-details span').at(4).text()).toBe('Pressure: 1006hPa');
        wrapper.find('.wi-showDetails-btn').simulate('click');
        expect(wrapper.find('.wi-details').length).toBe(0);
    });
});