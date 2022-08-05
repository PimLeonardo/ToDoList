import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Exemplo 1",
      completed: false,
    },
    {
      id: "2",
      title: "Exemplo 2",
      completed: true,
    },
    {
      id: "3",
      title: "Exemplo 3",
      completed: false,
    },
  ]);

  useEffect(() => {

  }, [])

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
    <Router>
      <div className="Container">
        <Header />
        <Route
          path="/"
          exact
          render={() => {
            return (
              <>
                <AddTask handleTaskAdd={handleTaskAdd} />
                <Tasks
                  tasks={tasks}
                  handleTaskStatus={handleTaskStatus}
                  handleTaskDelete={handleTaskDelete}
                />
              </>
            );
          }}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
}

export default App;