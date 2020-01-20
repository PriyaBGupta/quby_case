import React from 'react';
import { shallow } from 'enzyme';
import SetPointControl from './SetPointControl';

describe('SetPointControl test cases', () => {
	const mockIncreaseFn = jest.fn();
  	const mockDecreaseFn = jest.fn();
  	const wrapper = shallow(<SetPointControl increase={mockIncreaseFn} decrease={mockDecreaseFn} />);

  	it('simulate increase button', () => {
		wrapper.find('.btn-increase').simulate('click');
   		expect(mockIncreaseFn).toHaveBeenCalled();
   		expect(mockIncreaseFn.mock.calls.length).toEqual(1);
  	});
  	it('simulate decrease button', () => {
		wrapper.find('.btn-decrease').simulate('click');
   		expect(mockDecreaseFn).toHaveBeenCalled();
   		expect(mockDecreaseFn.mock.calls.length).toEqual(1);
	});
	it('contain plus sign for increase btn', () => {
		const text = wrapper.find('.btn-increase').text();
		expect(text.includes('+')).toBe(true);
	});
	it('contain - sign for decrease btn', () => {
		const text = wrapper.find('.btn-decrease').text();
		expect(text.includes('-')).toBe(true);
	});
});