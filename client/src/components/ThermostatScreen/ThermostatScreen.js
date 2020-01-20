import React from 'react';
import './ThermostatScreen.scss';
import Proptypes from 'prop-types'; 

const ThermostatScreen = (props) =>{
    return(
        <div>
        <div className="frame">
            <div className="thermostat">
		    <div className="ring">
		    </div>
            <div className="control">
                <div className="current-temp">{props.currentTemp}°</div>
                <div className="setpoint-temp">{props.currentSetpoint}<span>°</span></div>
                <div className="timestamp">{(new Date(props.timestamp).toLocaleTimeString())}</div>
            </div>
        </div>
        </div>
        </div>
    )
}
ThermostatScreen.prototypes = {
    currentTemp: Proptypes.number.isRequired,
    currentSetpoint: Proptypes.number.isRequired,
    timestamp: Proptypes.instanceOf(Date).isRequired
    
}

export default ThermostatScreen;