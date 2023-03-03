import '../CSS/LoginModal.css';
import { useState } from 'react';

 export const LoginModal = ({ open, closeLoginModal }) => {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    // login logic needs to be here for button to be enabled
  };
  return (
    <>
      <div id="login-modal" className="modal" open={open}>
        <div className="modal-content-login">
          <div className='title-login'>
            <h1>Welcome back to Cherry on Tech!</h1>
            <p>Log in with your email</p>
            <div className="reminder-error">
              <p>Looks like you may already have an account with us. Use your credentials to log in instead.</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group-login">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="info@cherry.com" id="email" name="email" required />
            </div>
            <div className="form-group-login">
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="password" id="password" name="password" required />
            </div>
            <button disabled={isButtonDisabled} className={isButtonDisabled ? "login-button-disabled" : "login-button-enabled"} type="submit">Log In</button>
          </form>
          <div>
            <p>Not a member yet?</p>
            <button>Register Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

