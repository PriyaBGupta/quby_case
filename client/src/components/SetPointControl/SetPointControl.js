import React from 'react';
import './SetPointControl.scss';
//TODO : prototypes
//css

const SetPointControl = (props) =>{
    return (
        <div>
        <button onClick={props.increase} className="btn-setpoint btn-increase">+</button>
        <button onClick={props.decrease} className="btn-setpoint btn-decrease">-</button>
        </div>
    )
}
export default SetPointControl;