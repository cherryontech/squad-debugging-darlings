import { useState, useEffect } from 'react';
import '../CSS/SignupModal.css';

export const SignupModal = ({ open, openLoginModal, closeSignupModal }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [emailMatchError, setEmailMatchError] = useState(false);

  useEffect(() => {
    const isValid = email && email === emailConfirm && password && password === passwordConfirm;
    setIsButtonDisabled(!isValid);
  }, [email, emailConfirm, password, passwordConfirm]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ email, password, password_confirm: passwordConfirm })
  //   };
  //   fetch('http://localhost:3000/auth/signup', requestOptions)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setMessage(data.message);
  //       if (data.message === 'Email already exists') {
  //         closeSignupModal(false);
  //         openLoginModal(true);
  //       } else {
  //         setEmail('');
  //         setEmailConfirm('');
  //         setPassword('');
  //         setPasswordConfirm('');
  //         closeSignupModal(true);
  //       }
  //     })
  //     .catch(error => console.log(error));
  // };

 useEffect(() => {
    const isValid = email && email === emailConfirm && password && password === passwordConfirm;
    setIsButtonDisabled(!isValid);
    setEmailMatchError(email !== '' && emailConfirm !== '' && email !== emailConfirm);
  }, [email, emailConfirm, password, passwordConfirm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, password_confirm: passwordConfirm })
    };
    fetch('http://localhost:3000/auth/signup', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMessage(data.message);
        if (data.message === 'Email already exists') {
          closeSignupModal(false);
          openLoginModal(true);
        } else {
          setEmail('');
          setEmailConfirm('');
          setPassword('');
          setPasswordConfirm('');
          closeSignupModal(true);
        }
      })
      .catch(error => console.log(error));
  };


  return (
    <div className="modal" open={open}>
      <div className="modal-content">
        <div className="modal-header">
          <p>Sign Up</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" value={email} placeholder="info@cherry.com" onChange={e => setEmail(e.target.value)} />
           {emailMatchError && <p style={{ color: 'red' }}>This value is not a valid email.</p>}
          <label>Confirm Email</label>
          <input type="email" value={emailConfirm} placeholder="info@cherry.com" onChange={e => setEmailConfirm(e.target.value)} />
          {emailMatchError && <p style={{ color: 'red' }}>Emails do not match.</p>}
          <br />
          <label>Password</label>
          <input type="password" value={password} placeholder="your password" onChange={e => setPassword(e.target.value)} />
          <br />
          <p className="i"><span>&#9432;</span>At least 8 characters and a mix of numbers.</p>
          <p className="i"><span>&#9432;</span>Must contain Upper & Lower case letters.</p>
          <p className="i"><span>&#9432;</span>No symbols.</p>
          <label>Confirm Password</label>
          <input type="password" value={passwordConfirm} placeholder="your password" onChange={e => setPasswordConfirm(e.target.value)} />
          <br />
          <button disabled={isButtonDisabled} className={isButtonDisabled ? "signup-button-disabled" : "signup-button-enabled"} type="submit">Register Account</button>
        </form>
        {message && <p>{message}</p>}
        <div className="login-account">
          <p>Already have an account?</p>
            <button className='log-in-button'>Log In</button>
        </div>
      </div>
    </div>
  );
};
