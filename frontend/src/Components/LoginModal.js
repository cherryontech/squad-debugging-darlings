import "../CSS/LoginModal.css";
import { useState, useEffect } from "react";
import { Paper, Alert } from "@mui/material";
import Nav from "./Nav";
import { AlertSeverity } from "../constants/AlertSeverity";
import { SignupModal } from "./SignupModal";
import { Link } from "react-router-dom";
import { ProgressBarForm } from "./ProgressBarForm";

export const LoginModal = ({ closeLoginModal, alertMsg, setAlertMsg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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
        console.log(data);
        setAlertMsg(data.message);
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
              <Link to="/setup-profile-1" style={{ textDecoration: "none" }}>
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
              </Link>
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
