import React from 'react';

import "./Button.css"

const Button = (props) => {
    return (
        <>
            <button onClick={props.handleAddClick}>{props.title}</button>
        </>
    );
}

export default Button;