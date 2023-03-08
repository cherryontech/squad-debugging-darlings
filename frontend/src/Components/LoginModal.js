import "../CSS/LoginModal.css";
import { useState } from "react";
import { Paper } from "@mui/material";
import Nav from "./Nav";

export const LoginModal = ({ closeLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // login logic in the next ticket
  };
  return (
    // <Paper elevation={3} sx={{ width: 1 / 4 }}>
    <>
      <Nav></Nav>
      <div className="modal">
        <div className="modal-content-login">
          <div className="title-login">
            <h1>Welcome back to Cherry on Tech!</h1>
            <p>Log in with your email</p>
            <div className="reminder-error">
              <p>
                Looks like you may already have an account with us. Use your
                credentials to log in instead.
              </p>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group-login">
              <label>Email</label>
              <input
                type="email"
                placeholder="info@cherry.com"
                id="email"
                name="email"
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
                required
              />
            </div>
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
          </form>
          <div className="register-account">
            <p>Not a member yet?</p>
            <button className="register-button">Register Now</button>
          </div>
        </div>
      </div>
      {/* </Paper> */}
    </>
  );
};
