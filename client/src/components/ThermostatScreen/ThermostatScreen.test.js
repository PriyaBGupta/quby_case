import React from 'react';
import { shallow } from 'enzyme';
import ThermostatScreen from './ThermostatScreen';

describe('ThermostatScreen test cases', () => {
	const currentSetpoint = 16;
	const currentTemp = 23;
	const timestamp = 1579559770600;
	const wrapper = shallow(
	<ThermostatScreen 
			currentSetpoint={currentSetpoint}
			currentTemp={currentTemp}
			timestamp={timestamp}
	/>);

	it('contain currentSetPoint', () => {
		const text = wrapper.find('.setpoint-temp').at(0).text();
		expect(text).toContain('16°');
	});
	it('contain currentTemp', () => {
		const text = wrapper.find('.current-temp').at(0).text();
		expect(text).toContain('23');
	});
	it('contain currentTemp', () => {
		const text = wrapper.find('.timestamp').at(0).text();
		expect(text).toContain('11:36:10 PM');
	});
});