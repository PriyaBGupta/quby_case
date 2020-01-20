import React from 'react';
import './ThermostatScreen.scss';
import Proptypes from 'prop-types'; 

const ThermostatScreen = (props) =>{
    return(
        <div>
        {/* <ul className="thermostat-container">
            <li>Heating</li>
            <li>{props.currentSetpoint}</li>
            <li>{props.currentTemp}</li>
            <li>{(new Date(props.timestamp).toLocaleTimeString())}</li>
        </ul> */}
        <div className="frame">
            <div className="thermostat">
		    <div className="ring">
			    {/* <div className="bottom_overlay"></div> */}
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