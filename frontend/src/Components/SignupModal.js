import { useState, useEffect } from "react";
import "../CSS/SignupModal.css";
import { LoginModal } from "./LoginModal";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";

export const SignupModal = ({ setAlertMsg }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [emailMatchError, setEmailMatchError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const isValid =
      email &&
      password &&
      passwordConfirm &&
      email !== "" &&
      password !== "" &&
      passwordConfirm !== "";
    setIsButtonDisabled(!isValid);
    setEmailMatchError(email !== "");
  }, [email, password, passwordConfirm]);

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    setPasswordError(!passwordRegex.test(value));
    console.log(passwordError);
  };

  const showLoginModal = () => {
    console.log("Are we here");
    navigate("/login", { alertMsg: alertMsg });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        password_confirm: passwordConfirm,
      }),
    };
    fetch("http://localhost:3000/users/signup", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Email already exists") {
          console.log("we are in this block");
          setAlertMsg("Email already exists. Please login!");
          showLoginModal();
        } else {
          setEmail("");
          setPassword("");
          setPasswordConfirm("");
          setAlertMsg("Account successfully created!");
          showLoginModal();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Nav showLogoutButton={false} />
      <div className="signup-container">
        <div className="signup-content">
          <div className="signup-title">
            <h1>Get Started with Cherry on Tech!</h1>
            <p>Register with your email</p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="info@cherry.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailMatchError && (
              <p className="error-message">This value is not a valid email.</p>
            )}
            <label>Password</label>
            <input
              type="password"
              value={password}
              placeholder="your password"
              onChange={(e) => setPassword(e.target.value)}
              onInput={(e) => validatePassword(e.target.value)}
            />
            <div className="yes-error">
              <p className={passwordError && password ? "error-message" : "i"}>
                <span>&#9432;</span>At least 8 characters and a mix of numbers.
              </p>
              <p className={passwordError && password ? "error-message" : "i"}>
                <span>&#9432;</span>Must contain Upper & Lower case letters.
              </p>
              <p className={passwordError && password ? "error-message" : "i"}>
                <span>&#9432;</span>No symbols.
              </p>
            </div>

            <br />
            <label>Confirm Password</label>
            <input
              type="password"
              value={passwordConfirm}
              placeholder="your password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <br />
            <div className="button-div">
              <button
                disabled={isButtonDisabled}
                className={
                  isButtonDisabled
                    ? "signup-button-disabled"
                    : "signup-button-enabled"
                }
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          {message && <p>{message}</p>}
          <div className="login-account">
            <p>Already have an account?</p>
            <Link className="log-in-button" to="/login">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
