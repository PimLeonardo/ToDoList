import React from 'react';

import "./Task.css"

const Task = ({ task, handleTaskStatus }) => {
    return (
        <div className="task-container"
            style={task.completed ? { borderLeft: '6px solid rgb(117, 176, 255)' } : {}}
            onClick={() => handleTaskStatus(task.id)}>

            {task.title}

        </div>
    )
}

export default Task;