import Tasks from "./components/Tasks";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="app">
            <Sidebar />
            <Tasks />
            <ToastContainer />
        </div>
    );
}

export default App;
