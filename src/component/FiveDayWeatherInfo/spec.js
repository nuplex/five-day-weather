import React from 'react';
import { shallow } from 'enzyme';
import FiveDayWeatherInfo from './FiveDayWeatherInfo';
import { testWeatherData } from '../../util/testWeatherData';
import WeatherInfo from "../WeatherInfo/WeatherInfo";

describe('FiveDayWeatherInfo', () => {
   it('renders without crashing', ()=>{
       shallow(<FiveDayWeatherInfo weatherData={testWeatherData} degConvert={(deg) => (deg)}/>)
   });

   it('has five days', ()=>{
       const wrapper = shallow(<FiveDayWeatherInfo weatherData={testWeatherData} degConvert={(deg) => (deg)}/>);
       expect(wrapper.find('WeatherInfo').length).toBe(5);
   })
});