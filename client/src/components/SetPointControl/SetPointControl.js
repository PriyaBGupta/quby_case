import React from 'react';
import './SetPointControl.scss';
import PropTypes from 'prop-types';

const SetPointControl = (props) =>{
    return (
        <div>
        <button onClick={props.increase} className="btn-setpoint btn-increase">+</button>
        <button onClick={props.decrease} className="btn-setpoint btn-decrease">-</button>
        </div>
    )
}

SetPointControl.propTypes = {
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired
}

export default SetPointControl;