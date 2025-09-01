import Tasks from "./components/Tasks";
import "./App.scss";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="app">
            <Sidebar />
            <Tasks />
        </div>
    );
}

export default App;
