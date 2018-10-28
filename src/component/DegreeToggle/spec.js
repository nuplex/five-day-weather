import React from 'react';
import { shallow } from 'enzyme';
import DegreeToggle from './DegreeToggle';

describe('DegreeToggle', () => {
    it('renders without crashing', ()=>{
        shallow(<DegreeToggle updateDegrees={() => {}}/>);
    });

    it('updates degree symbol via props', ()=>{
        //default is 'F'
        const wrapper = shallow(<DegreeToggle updateDegrees={() => {}} degrees={'C'}/>);
        expect(wrapper.find('button').text()).toBe('°C');
    });
});