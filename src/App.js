import Tasks from "./components/Tasks";
import Logo from "./assets/logo.png";
import "./App.scss";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div className="app">
            <img src={Logo} alt="Logo Task Manager" />
            <Tasks />
            <ToastContainer />
        </div>
    );
}

export default App;
