import { useNavigate } from "react-router-dom";
import "./Login.scss";
import Logo from "../assets/logo.png";
import CustomButton from "../components/CustomButton";
const Login = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate("/");
    };
    return (
        <div className="login-container">
            <img src={Logo} alt="Logo Task Manager Login" width={"40%"} />
            <div className="button-container">
                <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
