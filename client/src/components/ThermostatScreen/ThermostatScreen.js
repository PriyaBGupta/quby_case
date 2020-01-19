import React from 'react';
//TO:DO : Proptypes
//css

const ThermostatScreen = (props) =>{
    return(
        <div>
            Current Set Point: {props.currentSetpoint}
            Current current Temperature: {props.currentTemp}
            Current Update Time: {props.timestamp}
        </div>
    )
}
export default ThermostatScreen;