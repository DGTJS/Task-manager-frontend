import { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";
import "./Tasks.scss";
import AddTask from "./AddTask";
import { toast } from "react-toastify";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetchTasks();
    }, []);
    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(
                "https://task-manager-backend-71en.onrender.com/task"
            );
            console.log({ data });
            setTasks(data);
        } catch (_error) {
            toast.warning("Não foi possivel recuperar as tarefas.");
        }
    };
    return (
        <>
            <div className="tasks-container">
                <h2>Minhas Tarefas</h2>
                <div className="last-tasks">
                    <div className="tasks-list">
                        <h3>Últimas tarefas</h3>
                        <AddTask fetchTasks={fetchTasks} />
                        {tasks
                            .filter((task) => task.isCompleted === false)
                            .map((lastTask) => (
                                <TaskItem
                                    key={lastTask._id}
                                    task={lastTask}
                                    fetchTasks={fetchTasks}
                                />
                            ))}
                    </div>
                </div>
                <div className="completed-tasks">
                    <div className="tasks-list">
                        <h3>Tarefas Concluídas</h3>
                        {tasks
                            .filter((task) => task.isCompleted === true)
                            .map((task) => (
                                <TaskItem
                                    key={task._id}
                                    task={task}
                                    fetchTasks={fetchTasks}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Tasks;
