import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskDelete }) => {

    return (
        <>
            {tasks.map(task => <Task task={task} handleTaskDelete={handleTaskDelete} />)}
        </>
    )
}

export default Tasks