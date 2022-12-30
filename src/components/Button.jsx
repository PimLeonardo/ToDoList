import React from 'react';
import "./Button.css"

const Button = (props) => {
    return (
        <>
            <button className="button" onClick={props.propsClick}>{props.title}</button>
        </>
    );
}

export default Button;