import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
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

  const handleTaskStatus = (idTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id === idTask) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskDelete = (idTask) => {
    const newTasks = tasks.filter((task) => task.id !== idTask);

    setTasks(newTasks);
  };

  return (
    <>
      <div className="Container">
        <Header />
        <AddTask handleTaskAdd={handleTaskAdd} />
        <Tasks
          tasks={tasks}
          handleTaskStatus={handleTaskStatus}
          handleTaskDelete={handleTaskDelete}
        />
      </div>
    </>
  );
}

export default App;
