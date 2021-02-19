import Welcome from "../index";
import React from 'react';
import { shallow, mount, render } from 'enzyme';

describe('Register component', () => {
  it('renders "Register" text inside', () => {
    const wrapper = shallow(<Welcome isAuthenticated={false}/>);
    expect(wrapper.find('div').text()).toEqual("Register");
  })

  it('Has 4 inputs inside', () => {
    const wrapper = shallow(<Welcome isAuthenticated={false}/>);
    expect(wrapper.find('TextField')).toHaveLength(4);
  })
})
