import "./Login.scss";
import Logo from "../assets/logo.png";
import CustomButton from "../components/CustomButton";
const Login = () => {
    return (
        <div className="login-container">
            <img src={Logo} alt="Logo Task Manager Login" width={"40%"} />
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
