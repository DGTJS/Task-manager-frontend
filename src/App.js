import Tasks from "./components/Tasks";
import Logo from "./assets/logo.png";
import "./App.scss";

function App() {
    return (
        <div className="app">
            <img src={Logo} alt="Logo Task Manager" />
            <Tasks />
        </div>
    );
}

export default App;
