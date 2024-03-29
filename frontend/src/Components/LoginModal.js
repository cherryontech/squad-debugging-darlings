import "../CSS/LoginModal.css";
import { useState, useEffect, useContext } from "react";
import { Alert } from "@mui/material";
import Nav from "./Nav";
import { AlertSeverity } from "../constants/AlertSeverity";
import { SignupModal } from "./SignupModal";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { api } from "../api/api";

const LoginModal = ({ alertMsg, setAlertMsg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { login, token } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isValid = email && password;
    setIsButtonDisabled(!isValid);
    setAlertMsg(location?.state?.msg);
  }, [email, password, setAlertMsg]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    try {
      const response = await fetch(api.users.signin, requestOptions);
      const data = await response.json();
      setAlertMsg(data.message);

      const dataToken = data.token;
      if (!dataToken) {
        window.reload;
      } else {
        login(dataToken);
        navigate("/setup-profile-1");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav showLogoutButton={false} />
      <div className="modal">
        <div className="modal-content-login">
          <div className="title-login">
            <h1>Welcome back to Cherry on Tech!</h1>
            <p>Log in with your email</p>
            {alertMsg ? (
              <Alert severity={AlertSeverity[alertMsg]}>{alertMsg}</Alert>
            ) : (
              <></>
            )}
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group-login">
              <label>Email</label>
              <input
                type="email"
                placeholder="info@cherry.com"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group-login">
              <label>Password:</label>
              <input
                type="password"
                placeholder="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="login-btn-div">
              <button
                className={
                  isButtonDisabled
                    ? "login-button-disabled"
                    : "login-button-enabled"
                }
                disabled={isButtonDisabled}
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="register-account">
            <p>Not a member yet?</p>
            <Link className="register-button" to="/signup">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
