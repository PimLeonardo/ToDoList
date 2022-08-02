import React, { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "estudar",
      completed: false,
    },
    {
      id: "2",
      title: "fazer comida",
      completed: true,
    },
  ]);

  const handleTaskAdd = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ];
    setTasks(newTask);
  };

  return (
    <>
      <div className="Container">
        <AddTask handleTaskAdd={handleTaskAdd} />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
