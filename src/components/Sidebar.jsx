import "./Sidebar.scss";
import Logo from "../assets/logo.png";
import CustomButton from "./CustomButton";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={Logo} alt="Logo Task Manager" width={"150"} />
            </div>
            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    );
};

export default Sidebar;
