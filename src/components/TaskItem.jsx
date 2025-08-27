import "./TaskItem.scss";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

const TaskItem = ({ task }) => {
    const DeleteTaskItem = async () => {
        try {
            await axios.delete(
                `https://task-manager-backend-71en.onrender.com/task/${task._id}`
            );
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
