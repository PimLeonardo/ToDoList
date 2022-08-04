import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskStatus, handleTaskDelete }) => {

    return (
        <>
            {tasks.map(task => <Task task={task} handleTaskStatus={handleTaskStatus} handleTaskDelete={handleTaskDelete} />)}
        </>
    )
}

export default Tasks