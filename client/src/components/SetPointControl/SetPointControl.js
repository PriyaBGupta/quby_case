import React, {Fragment} from 'react';
import './SetPointControl.scss';
import PropTypes from 'prop-types';

const SetPointControl = (props) =>{
    return (
        <Fragment>
            <button onClick={props.increase} className="btn-setpoint btn-increase">+</button>
            <button onClick={props.decrease} className="btn-setpoint btn-decrease">-</button>
        </Fragment>
    )
}

SetPointControl.propTypes = {
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired
}

export default SetPointControl;