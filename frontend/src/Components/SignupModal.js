import React, { useState, useEffect } from 'react';
import '../CSS/SignupModal.css';
import { Link } from 'react-router-dom';

const SignupModal = ({ onClose }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  useEffect(() => {
    const isValid = email && email === emailConfirm && password && password === passwordConfirm;
    setIsButtonDisabled(!isValid); 
  }, [email, emailConfirm, password, passwordConfirm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== emailConfirm) {
      throw new Error('Emails do not match');
    }  
    if (password !== passwordConfirm) {
      throw new Error('Passwords do not match');
    } 

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, password_confirm: passwordConfirm })
    };
    console.log('requestOptions:', requestOptions);
    
    fetch('http://localhost:3000/auth/signup', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('POST request was successful:', data);
        setEmail('');
        setEmailConfirm('');
        setPassword('');
        setPasswordConfirm('');
      })
      .catch(error => console.log('Error:', error));
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <p>Sign Up</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} placeholder="info@cherry.com" onChange={e => setEmail(e.target.value)} />
          <label>Confirm Email:</label>
          <input type="email" value={emailConfirm} placeholder="info@cherry.com" onChange={e => setEmailConfirm(e.target.value)} />
          <br />
          <label>Password:</label>
          <input type="password" value={password} placeholder="your password" onChange={e => setPassword(e.target.value)} />
          <br />
          <p className="i"><span>&#9432;</span>At least 8 characters and a mix of numbers.</p>
          <p className="i"><span>&#9432;</span>Must contain Upper & Lower case letters.</p>
          <p className="i"><span>&#9432;</span>No symbols.</p>
          <label>Confirm Password:</label>
          <input type="password" value={passwordConfirm} placeholder="your password" onChange={e => setPasswordConfirm(e.target.value)} />
          <br />
          <button disabled={isButtonDisabled} className={isButtonDisabled ? "signup-button-disabled" : "signup-button-enabled"} type="submit">Register Account</button>
        </form>
        <div className="login-account">
          <p>Already have an account?</p>
          <Link to='/login' aria-label="Click to go to log in page">
            <button className='log-in-button'>Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
