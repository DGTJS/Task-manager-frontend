import "./TaskItem.scss";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { toast, Flip } from "react-toastify";

const TaskItem = ({ task, fetchTasks }) => {
    const DeleteTaskItem = async () => {
        try {
            await axios.delete(
                `https://task-manager-backend-71en.onrender.com/task/${task._id}`
            );
            await fetchTasks();
            toast.success("A tarefa foi removida com sucesso", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });
        } catch (error) {
            toast.warning("Algo deu errado.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });
        }
    };

    const handleTaskCompletionChange = async (e) => {
        try {
            await axios.patch(
                `https://task-manager-backend-71en.onrender.com/task/${task._id}`,
                {
                    isCompleted: e.target.checked,
                }
            );

            await fetchTasks();
            toast.success("A tarefa foi concluida com sucesso", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });
        } catch (error) {}
    };

    return (
        <>
            <div className="task-item-container">
                <div className="task-description">
                    <label
                        className={
                            task.isCompleted
                                ? "checkbox-container-completed"
                                : "checkbox-container"
                        }
                    >
                        <input
                            type="checkbox"
                            defaultChecked={task.isCompleted}
                            onChange={(e) => handleTaskCompletionChange(e)}
                        />
                        {task.description}
                        <span
                            className={
                                task.isCompleted
                                    ? "checkmark completed"
                                    : "checkmark"
                            }
                        ></span>
                    </label>
                </div>
                <div className="delete" onClick={DeleteTaskItem}>
                    <FaTrash size={18} color="#F97474" />
                </div>
            </div>
        </>
    );
};

export default TaskItem;
