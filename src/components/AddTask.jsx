import React, { useState } from 'react';
import Input from "./Input"
import Button from "./Button"
import "./AddTask.css"

const AddTask = (props) => {

    const [inputName, setInputName] = useState('')
    const [inputDetails, setInputDetails] = useState('')

    const handleNameInputChange = (e) => {
        setInputName(e.target.value)
    }

    const handleDetailsInputChange = (e) => {
        setInputDetails(e.target.value)
    }

    const handleAddClick = () => {
        props.handleTaskAdd(inputName, inputDetails)
        setInputName("");
        setInputDetails("");
    }

    return (
        <div className="add-task-container">
            <p>Título</p>
            <Input placeholder={"Digite o título da sua tarefa."} handleInputChange={handleNameInputChange} inputData={inputName} />
            <p>Detalhes</p>
            <Input placeholder={"Digite detalhes e observações sobre a sua tarefa."} handleInputChange={handleDetailsInputChange} inputData={inputDetails} />
            <Button propsClick={handleAddClick} title="Adicionar" />
        </div>
    );
}

export default AddTask;