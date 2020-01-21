import axios from 'axios';
import * as urlName from '../urlThermostat';

const getThermostatData = (successCallback,errorCallback) => {
    return axios.get(urlName.URL_THERMOSTAT)
}
export default getThermostatData;