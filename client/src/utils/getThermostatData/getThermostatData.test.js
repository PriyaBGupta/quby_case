import axios from 'axios';
import getThermostatData from './getThermostatData';
jest.mock('axios');

describe('getThermostatData', () => {
	it('should fetch thermostat stat', () => {
		const thermostat = {
			currentSetpoint: 16,
			currentTemp: 23,
			timestamp: 1579559770600
		};
		const resp = {data: thermostat};
		axios.get.mockResolvedValue(resp);
		return getThermostatData().then(response => expect(response.data).toBe(thermostat));
	});
});