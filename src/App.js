import { useState, useEffect } from "react";
import TaskItem from "./components/TaskItem";
import axios from "axios";

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
        <>
            {tasks.map((task) => (
                <TaskItem key={task._id} task={task} />
            ))}
        </>
    );
}

export default App;
