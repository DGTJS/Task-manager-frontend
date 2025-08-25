import "./TaskItem.scss";
import { FaTrash } from "react-icons/fa";

const TaskItem = ({ task }) => {
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
                <div className="delete">
                    <FaTrash size={18} color="#F97474" />
                </div>
            </div>
        </>
    );
};

export default TaskItem;
