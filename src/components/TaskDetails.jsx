import React from "react";
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

    const filterTask = (taskTitle) => {
        const id = localStorage.getItem('id')

        for (let i = 1; i <= id; i++) {
            let task = JSON.parse(localStorage.getItem(i))

            if (task === null) {
                continue
            }

            // eslint-disable-next-line eqeqeq
            if (task.map(task => task.title) == taskTitle) {
                return task.map(task => task.details)
            }
        }
    }

    return (
        <>
            <div className="button-back">
                <Button propsClick={handleBackClick} title="Voltar"></Button>
            </div>
            <div className="task-datails-text">
                <h2>{params.taskTitle}</h2>
                <p>{filterTask(params.taskTitle)}</p>
            </div>
        </>
    );
}

export default TaskDetails;