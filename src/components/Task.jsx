import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';
import "./Task.css"

const Task = ({ task, handleTaskDelete }) => {

    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.map(task => task.title)}`)
        history.go(0)
    }

    return (
        <div div className="task-container" >
            <div className="task-title">
                {task.map(task => task.title)}
            </div>
            <div className="task-buttons">
                <span className="remove-task" onClick={() => handleTaskDelete(task.map(task => task.title))}><CgClose /></span>
                <span className="info-task" onClick={handleTaskDetailsClick}><CgInfo /></span>
            </div>
        </div>
    )
}

export default Task;