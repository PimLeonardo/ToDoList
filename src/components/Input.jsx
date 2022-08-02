import React from 'react';

import "./Input.css"

const Input = (props) => {
    return (
        <>
            <input type="text" className="input" placeholder="Escreva sua tarefa" onChange={props.handleInputChange} value={props.inputData} />
        </>
    );
}

export default Input;