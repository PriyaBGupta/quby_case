import axios from 'axios';
import * as urlName from './urlThermostat';

const getThermostatData = (successCallback,errorCallback) => {
    return axios.get(urlName.URL_THERMOSTAT)
    // .then(res => {
    //     if(successCallback != null){
    //         successCallback(res);
    //      }
    // })
    // .catch(err => {
    //     if(errorCallback != null){
    //         errorCallback(err);
    //      }
    // });
}
export default getThermostatData;