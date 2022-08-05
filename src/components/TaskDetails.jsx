import React from 'react';
import { useParams, useHistory } from "react-router";
import Button from './Button'
import "./TaskDetails.css"

const TaskDetails = () => {

    const params = useParams();
    const history = useHistory();

    const handleBackClick = () => {
        history.push("/")
        history.go(0)
    }

    return (
        <>
            <div className="button-back">
                <Button propsClick={handleBackClick} title="Voltar"></Button>
            </div>
            <div className="task-datails-text">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime laudantium voluptatibus totam, odit excepturi doloremque!</p>
            </div>
        </>
    );
}

export default TaskDetails;