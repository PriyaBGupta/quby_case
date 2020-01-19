import React from 'react';
//TO:DO : Proptypes
//css

const ThermostatScreen = ({display}) =>{
    return(
        <div>
            Current Set Point: {display.currentSetpoint}
            Current current Temperature: {display.currentTemp}
            Current Update Time: {display.timestamp}
        </div>
    )
}
export default ThermostatScreen;