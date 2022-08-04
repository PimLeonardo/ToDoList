import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';

import "./Task.css"

const Task = ({ task, handleTaskStatus, handleTaskDelete }) => {
    return (
        <div className="task-container"
            style={task.completed ? { borderLeft: '6px solid rgb(117, 176, 255)' } : {}}>
            <div className="task-title" onClick={() => handleTaskStatus(task.id)}>
                {task.title}
            </div>
            <div className="task-buttons">
                <span className="remove-task" onClick={() => handleTaskDelete(task.id)}><CgClose /></span>
                <span className="info-task" ><CgInfo /></span>
            </div>
        </div >
    )
}

export default Task;