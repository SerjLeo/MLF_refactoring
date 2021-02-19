import Welcome from "../index";
import React from 'react';
import { shallow, mount, render } from 'enzyme';

describe('Welcome component', () => {
  it('renders "Welcome here" text inside', () => {
    // @ts-ignore
    const wrapper = shallow(<Welcome isAuthenticated={false}/>);
    expect(wrapper.find('h1').text()).toEqual("Welcome Here");
  })
})
