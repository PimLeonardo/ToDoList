import React from 'react';
import "./Input.css"

const Input = (props) => {
    return (
        <>
            <input type="text" className="input" placeholder={props.placeholder} onChange={props.handleInputChange} value={props.inputData} />
        </>
    );
}

export default Input;