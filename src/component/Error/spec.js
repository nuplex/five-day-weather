import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {
    it('renders without crashing', ()=>{
        shallow(<Error/>);
    });

    it('shows a passed in error msg', ()=>{
        const wrapper = shallow(<Error errorMsg={'test'}/>);
        expect(wrapper.find('.error-text').first().text()).toBe('test');
    })
});