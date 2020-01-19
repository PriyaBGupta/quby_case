import React, {Component, useRef} from 'react';
import ThermostatScreen from '../components/ThermostatScreen/ThermostatScreen';
import SetPointControl from '../components/SetPointControl/SetPointControl';
import getThermostatData from '../utils/getThermostatData';
import patchThermostatData from '../utils/patchThermostatData';

class App extends Component{
    state = {
        currentSetpoint: null,
        currentTemp: 0,
        timestamp: 0,
        intervalId: ''
    }
    componentDidMount(){
        this.callThermostatFetch();
        let intervalId = setInterval(this.callThermostatFetch, 2000);
        this.setState({intervalId: intervalId});
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }
    callThermostatFetch = (setPointStatus) => {
        getThermostatData()
        .then((response) => {
            if(response.status === 200){
                const thermostat = {...response.data};
                if(this.state.currentSetpoint !== null){
                    console.log('current Setpoint',thermostat.currentSetpoint);
                    this.setState({
                        currentTemp: thermostat.currentTemp,
                        timestamp: thermostat.timestamp
                    });
                }
                else {
                    this.setState({
                        currentTemp: thermostat.currentTemp,
                        timestamp: thermostat.timestamp,
                        currentSetpoint: thermostat.currentSetpoint
                    });
                }
            }
            else if(response.status === 202){
                this.callThermostatFetch();
            }
        })
        .catch((error) => {
            // handle error
        console.log(error);
        })
    }
    callThermostatPatch = (updatedCurrentSetpoint) => {
        let canceled = false;
        patchThermostatData(updatedCurrentSetpoint)
        .then((response) => {
            if(!canceled){
                console.log(canceled,'was I called race condition');
                //this.callThermostatFetch();
            }
        })
        .catch((error) => {
            console.log(error);
        });
        return (canceled = true);
    }
    increaseTempHandler = () => {
        const currentSetpoint = this.state.currentSetpoint;
        const increaseSetPoint = currentSetpoint + 0.5;
        this.setState({currentSetpoint: increaseSetPoint});
    }
    decreaseTempHandler = () => {
        const currentSetpoint = this.state.currentSetpoint;
        const decreaseSetPoint = currentSetpoint - 0.5;
        this.setState({currentSetpoint: decreaseSetPoint});
    }
    lastPromise = React.createRef();
    componentDidUpdate(prevProps, prevState){
        if(prevState.currentSetpoint !== this.state.currentSetpoint){
            console.log(this.lastPromise);
        const currentPromise = patchThermostatData(this.state.currentSetpoint)
        .then((response) => {
            if(currentPromise === this.lastPromise.current){
                console.log('was I called race condition');
                this.callThermostatFetch();
            }
        })
        .catch((error) => {
            console.log(error);
        });
        this.lastPromise.current = currentPromise;
        console.log(this.lastPromise,'setting last promise');
        }
    }
    render(){
        return(
            <div>
                <h1>Thermostat</h1>
                <ThermostatScreen 
                currentSetpoint = {this.state.currentSetpoint}
                currentTemp = {this.state.currentTemp}
                timestamp = {this.state.timestamp}></ThermostatScreen>
                <SetPointControl 
                increase={this.increaseTempHandler} 
                decrease={this.decreaseTempHandler}></SetPointControl>
            </div>
        )
    }

}

export default App;