import React from 'react';
import { shallow } from 'enzyme';
import GetFiveDayWeather from './GetFiveDayWeather';
import { getKeyData, resolveInputType, formatCityCountry } from './util';
import { testWeatherData__RAW } from "../../util/testWeatherData";

describe('GetFiveDayWeather', () => {
   it('renders without creashing', () => {
       shallow(<GetFiveDayWeather/>);
   });

   it('has an input field', () => {
       const wrapper = shallow(<GetFiveDayWeather/>);
       expect(wrapper.find('LocationInput'));
   });

    it('has a degree toggle', () => {
        const wrapper = shallow(<GetFiveDayWeather/>);
        expect(wrapper.find('DegreeToggle'));
    });

    it('can get well-formed data for the app', () => {
        const data = getKeyData(testWeatherData__RAW);
        expect(data.country).toBe('US');
        expect(data.city).toBe('Somerville');
        expect(data.days.length).toBe(5);
    });

    it('can handle various inputs and make them well formed', () => {
        expect(formatCityCountry('  Tokyo')).toBe('Tokyo');
        expect(formatCityCountry('  Tokyo  ,   JP')).toBe('Tokyo,JP');
        expect(formatCityCountry('Tokyo      ,,,,,JP')).toBe('Tokyo,JP');
        expect(formatCityCountry('New      York    ')).toBe('New+York');
        expect(formatCityCountry('  New   York,,,,, US    ')).toBe('New+York,US');
        expect(formatCityCountry('New York, US')).toBe('New+York,US');
        expect(formatCityCountry('seattle')).toBe('seattle');
        expect(formatCityCountry('Rio de Janeiro, BR')).toBe('Rio+de+Janeiro,BR');
        expect(formatCityCountry('    rio  de    Janeiro,,  BR')).toBe('rio+de+Janeiro,BR');

        //type checks
        expect(resolveInputType('Tokyo')).toBe('city');
        expect(resolveInputType('  08846')).toBe('zip');
        expect(resolveInputType('20754')).toBe('zip');
        expect(resolveInputType('+23.443-35.452')).toBe('latlong');
        expect(resolveInputType('-23.423')).toBe('latlong');

        //check fallback
        expect(resolveInputType('   ,3423.')).toBe('city');
    });
});