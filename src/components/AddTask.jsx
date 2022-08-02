import React, { useState } from 'react';
import Input from "./Input"
import Button from "./Button"

import "./AddTask.css"

const AddTask = (props) => {

    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddClick = () => {
        props.handleTaskAdd(inputData)
    }

    return (
        <div className="add-task-container">
            <Input handleInputChange={handleInputChange} inputData={inputData} />
            <Button handleAddClick={handleAddClick} title="Adicionar" />
        </div>
    );
}

export default AddTask;