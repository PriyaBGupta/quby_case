import React from 'react';
import { shallow } from 'enzyme';
import SetPointControl from './SetPointControl';

describe('App', () => {
  const wrapper = shallow(<SetPointControl />);

  it('renders the title', () => {
    //expect(wrapper.find('h1').exists()).toBe(true);
  });
});