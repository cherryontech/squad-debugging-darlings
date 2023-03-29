import "../CSS/LoginModal.css";
import { useState, useEffect, useContext } from "react";
import { Paper, Alert } from "@mui/material";
import Nav from "./Nav";
import { AlertSeverity } from "../constants/AlertSeverity";
import { SignupModal } from "./SignupModal";
import { Link } from "react-router-dom";
import { ProgressBarForm } from "./ProgressBarForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const LoginModal = ({ closeLoginModal, alertMsg, setAlertMsg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { login, token } = useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    const isValid = email && password;
    console.log(isValid);
    setIsButtonDisabled(!isValid);
  });

  const showSignupModal = () => {
    // closeLoginModal(true);
    open(SignupModal, "_self");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    fetch("http://localhost:3000/users/signin", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");
        setAlertMsg(data.message);
        //data.token would give you the token, we need to navigate to the next page with this token, this token contains the userId which we'll use on the next page
        // setToken(data.token)
        // localStorage.setItem("token", data.token);
        const dataToken = data.token;
        login(dataToken);

        navigate('/setup-profile-1');
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Nav showLogoutButton={false} />
      <div className="modal">
        <div className="modal-content-login">
          <div className="title-login">
            <h1>Welcome back to Cherry on Tech!</h1>
            <p>Log in with your email</p>
            {alertMsg != "" ? (
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
              {/* <Link to="/setup-profile-1" style={{ textDecoration: "none" }}> see how to send props on this part, send this token to the next page, maybe use the Link or maybe use the useNavigate hook to do that. So we can dyncially invole each user */}

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
              {/* </Link> */}
            </div>
          </form>
          <div className="register-account">
            <p>Not a member yet?</p>
            <button className="register-button" onClick={showSignupModal}>
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
