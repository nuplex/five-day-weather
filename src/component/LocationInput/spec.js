import React from 'react';
import { shallow } from 'enzyme';
import LocationInput from './LocationInput';

describe('LocationInput', () => {
   it('renders without crashing', () => {
       shallow(<LocationInput getWeatherData={() => {}}/>)
   });

   it('takes a typed value and passes it for getting weather data', () => {
       const wrapper = shallow(<LocationInput getWeatherData={jest.fn()}/>);
       wrapper.find('input').simulate('change', {target: {value:'test'}});
       wrapper.find('.location-submit-btn').simulate('click');
       expect(wrapper.instance().props.getWeatherData).toHaveBeenCalledWith('test');
   });

   it('displays a passed in value', () => {
       const wrapper = shallow(<LocationInput location={'test'} getWeatherData={jest.fn()}/>);
       expect(wrapper.find('input').props().value).toBe('test');
   });
});

describe('Locate Me Button', () => {
   it('makes the call to get the users location', () => {
       const wrapper = shallow(
           <LocationInput
               sendLoadingRequest={jest.fn()}
               usedLocateMe={jest.fn()}
               getWeatherData={jest.fn()}
               sendError={jest.fn()}
           />);
       wrapper.find('.locate-me-btn').simulate('click');

       //this call will fail since the test is running it, thats expected
       expect(wrapper.instance().props.sendError).toHaveBeenCalledWith('We were unable to locate you.');
   });
});

describe('Formatting Help', () => {
    it('toggles', () => {
        const wrapper = shallow(<LocationInput getWeatherData={jest.fn()}/>);
        expect(wrapper.find('.fmt-help').length).toBe(0);
        wrapper.find('.toggle-fmt-btn').simulate('click');
        expect(wrapper.find('.fmt-help').length).toBe(1);
        wrapper.find('.toggle-fmt-btn').simulate('click');
        expect(wrapper.find('.fmt-help').length).toBe(0);
    });
});