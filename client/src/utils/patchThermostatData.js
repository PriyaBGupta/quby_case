import axios from 'axios';
import * as urlName from './urlThermostat';

const patchThermostatData = (currentSetpoint) => {
    const patchData = {currentSetpoint}
    return axios.patch(urlName.URL_THERMOSTAT,patchData)
}

export default patchThermostatData;