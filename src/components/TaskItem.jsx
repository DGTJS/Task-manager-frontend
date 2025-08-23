import Checkbox from "@mui/material/Checkbox";
import { grey, green } from "@mui/material/colors";

const TaskItem = ({ task }) => {
    return (
        <>
            <div className="taskItems">
                <Checkbox
                    checked={task.isCompleted}
                    sx={{
                        color: grey[50],
                        "&.Mui-checked": {
                            color: green[600],
                        },
                    }}
                />
                <h1
                    style={{
                        textDecoration: task.isCompleted
                            ? "line-through"
                            : "none",
                    }}
                >
                    {task.description}
                </h1>
            </div>
        </>
    );
};

export default TaskItem;
