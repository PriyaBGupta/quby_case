import React from 'react';
//TODO : prototypes
//css

const SetPointControl = (props) =>{
    return (
        <div>
        <button onClick={props.increase}>+</button>
        <button onClick={props.decrease}>-</button>
        </div>
    )
}
export default SetPointControl;