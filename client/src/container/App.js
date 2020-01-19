import React, {Component } from 'react';
import axios from 'axios';
import ThermostatScreen from '../components/ThermostatScreen/ThermostatScreen';
import SetPointControl from '../components/SetPointControl/SetPointControl';
import getThermostatData from '../utils/getThermostatData';
import patchThermostatData from '../utils/patchThermostatData';

const URL_THERMOSTAT = '/thermostat';

class App extends Component{
    state = {
        thermostatScreen:{
            currentSetpoint:'',
            currentTemp:'',
            timestamp:''
        },
        intervalId: ''
    }
    componentDidMount(){
        let self = this;
        this.callThermostatFetch();
        let intervalId = setInterval(this.callThermostatFetch, 2000);
        this.setState({intervalId: intervalId});
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }
    callThermostatFetch = () => {
        const self = this;
        getThermostatData()
        .then(function (response) {
            console.log('response',response.data);
            if(response.status === 200){
                const thermostatResponse = {...response.data};
                console.log('state',self.state);
                self.setState({thermostatScreen: thermostatResponse})
            }
            else if(response.status === 202){
                self.callThermostatFetch();
            }
        })
        .catch(function (error) {
            // handle error
        console.log(error);
        })
    }
    render(){
        return(
            <div>
                <h1>Thermostat</h1>
                <ThermostatScreen display={this.state.thermostatScreen}></ThermostatScreen>
                {/* <SetPointControl></SetPointControl> */}
            </div>
        )
    }

}

export default App;