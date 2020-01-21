import React, {Component, Fragment} from 'react';
import ThermostatScreen from '../components/ThermostatScreen/ThermostatScreen';
import SetPointControl from '../components/SetPointControl/SetPointControl';
import getThermostatData from '../utils/getThermostatData/getThermostatData';
import patchThermostatData from '../utils/patchThermostatData/patchThermostatData';
import './App.scss';

class App extends Component{
    state = {
        currentSetpoint: null,
        currentTemp: 0,
        timestamp: 0,
        intervalId: '',
        error: false
    }
    lastPromise = React.createRef();
    
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
                    this.setState({
                        currentTemp: thermostat.currentTemp,
                        timestamp: thermostat.timestamp,
                        error: false
                    });
                }
                else {
                    this.setState({
                        currentTemp: thermostat.currentTemp,
                        timestamp: thermostat.timestamp,
                        currentSetpoint: thermostat.currentSetpoint,
                        error: false
                    });
                }
            }
            else if(response.status === 202){
                this.setState({error: false});
                this.callThermostatFetch();
            }
        })
        .catch((error) => {
            this.setState({error: true});
        })
    }
    callThermostatPatch = (updatedCurrentSetpoint) => {
        const currentPromise = patchThermostatData(updatedCurrentSetpoint)
        .then((response) => {
            if(currentPromise === this.lastPromise.current){
                this.callThermostatFetch();
                this.setState({error: false});
            }
        })
        .catch((error) => {
            this.setState({error: true});
        });
        this.lastPromise.current = currentPromise;
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
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.currentSetpoint !== this.state.currentSetpoint){
            this.callThermostatPatch(this.state.currentSetpoint);
        }
    }
    render(){
        return(
            <Fragment>
                {
                this.state.error ? <p>Opps dear something went wrong please try refreshing the page!!</p>:
                    <div>
                        <h1 className="header-title">Thermostat</h1>
                        <ThermostatScreen 
                        currentSetpoint = {this.state.currentSetpoint}
                        currentTemp = {this.state.currentTemp}
                        timestamp = {this.state.timestamp}></ThermostatScreen>
                        <SetPointControl 
                        increase={this.increaseTempHandler} 
                        decrease={this.decreaseTempHandler}></SetPointControl>
                    </div>
                }
            </Fragment>
        )
    }

}

export default App;