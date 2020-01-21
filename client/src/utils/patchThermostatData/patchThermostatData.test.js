import axios from 'axios';
import patchThermostatData from './patchThermostatData';
jest.mock('axios');

describe('patchThermostatData', () => {
    it('should patch thermostat currentSetpoint', () => {
        const currentSetpoint = 16;
        const resp = {data:''};
        axios.patch.mockResolvedValue(resp);
        return patchThermostatData().then(response => expect(response.data).toBe(''));
    });
});