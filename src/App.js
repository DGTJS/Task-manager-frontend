import { useState, useEffect } from "react";
import TaskItem from "./components/TaskItem";
import axios from "axios";
import Tasks from "./components/tasks";
import Logo from "./assets/logo.png";
import "./App.scss";

function App() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetchTasks();
    }, []);
    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/task");
            console.log({ data });
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="app">
            <img src={Logo} alt="Logo Task Manager" />
            <Tasks />
        </div>
    );
}

export default App;
