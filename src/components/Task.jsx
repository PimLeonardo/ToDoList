import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';
import "./Task.css"

const Task = ({ task, handleTaskStatus, handleTaskDelete }) => {

    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
        history.go(0)
    }


    return (
        <div className="task-container"
            style={task.completed ? { borderLeft: '6px solid rgb(117, 176, 255)' } : {}}>
            <div className="task-title" onClick={() => handleTaskStatus(task.id)}>
                {task.title}
            </div>
            <div className="task-buttons">
                <span className="remove-task" onClick={() => handleTaskDelete(task.id)}><CgClose /></span>
                <span className="info-task" onClick={handleTaskDetailsClick}><CgInfo /></span>
            </div>
        </div >
    )
}

export default Task;