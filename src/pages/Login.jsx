import "./Login.scss";
import Logo from "../assets/logo.png";
import CustomButton from "../components/CustomButton";
const Login = () => {
    return (
        <div className="login-container">
            <img src={Logo} alt="Logo Task Manager Login" />
            <CustomButton>Entrar</CustomButton>
        </div>
    );
};

export default Login;
