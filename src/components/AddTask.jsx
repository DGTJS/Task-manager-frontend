import "./AddTask.scss";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
// import axios from "axios";
import { toast, Flip, ToastContainer } from "react-toastify";

const AddTask = () => {
    const [task, setTask] = useState("");
    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return toast.warn(
                    "A tarefa precisa de uma descrição para ser adicionada",
                    {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Flip,
                    }
                );
            }
        } catch (error) {}
    };
    return (
        <>
            <div className="add-task-container">
                <CustomInput
                    label="Adicionar tarefa"
                    value={task}
                    onChange={onChange}
                />
                <CustomButton onClick={handleTaskAddition}>
                    <FaPlus size={14} />
                </CustomButton>
            </div>
            <ToastContainer />
        </>
    );
};

export default AddTask;
