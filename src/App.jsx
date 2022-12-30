import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        checkId()
        loadTasks()
    }, [])

    const loadTasks = () => {

        const taskList = ([])
        const id = localStorage.getItem('id')

        for (let i = 1; i <= id; i++) {
            let task = JSON.parse(localStorage.getItem(i))

            if (task === null) {
                continue
            }

            taskList.id = i
            taskList.push(task)
        }

        setTasks(taskList)
    }

    const checkId = () => {
        const id = localStorage.getItem("id")
        if (id === null) {
            localStorage.setItem("id", 0)
        }
    }

    const createId = () => {
        let nextId = localStorage.getItem("id")
        return parseInt(nextId) + 1
    }

    const handleTaskAdd = (taskTitle, taskDetails) => {
        const newTasks = [
            {
                id: createId(),
                title: taskTitle,
                details: taskDetails,
            },
        ];

        localStorage.setItem(createId(), JSON.stringify(newTasks))

        localStorage.setItem('id', createId())

        loadTasks()
    };

    const handleTaskDelete = (titleTask) => {
        tasks.forEach(function (task) {
            // eslint-disable-next-line eqeqeq
            if (task.find(task => task.title == titleTask)) {
                const id = task.map(task => task.id)
                localStorage.removeItem(id)
                loadTasks()
            }
        })
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