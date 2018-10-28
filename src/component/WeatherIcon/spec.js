import React from 'react';
import { shallow } from 'enzyme';
import WeatherIcon from './WeatherIcon'

describe('WeatherIcon', () => {
   it('renders without crashing', () => {
       shallow(<WeatherIcon weatherID={0}/>);
   });

   it('get the correct icon', () => {
       //701 is fog
       const wrapper = shallow(<WeatherIcon weatherID={701}/>);
       expect(wrapper.find('img').props().alt).toBe('fog');
   })
});