import React from 'react';
import { useState } from 'react';
import '../CSS/SignupModal.css'
import { Link } from 'react-router-dom';

  const SignupModal = ({ onClose }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);
  // const [email, setEmail] = useState("")
  // const [repeatEmail, setRepeatEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [repeatPassword, setRepeatPassword] = useState("")

  // const handleInputChange = (event) => {
  //   const inputs = event.target.form.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');
  //   let isAllFilled = true;
  //   inputs.forEach(input => {
  //     if (!input.value) {
  //       isAllFilled = false;
  //     }
  //   });
  //   setIsButtonDisabled(!isAllFilled);
  // }

   const handleSubmit = (event) => {
  event.preventDefault();
  if (email === repeatEmail && password === repeatPassword) {
    console.log("did this submit?")
    setIsFormSubmitted(true);
  } else {
    setIsButtonDisabled(true);
  }
}

const handleInputChange = (event) => {
  const form = event.target.form;
  const email = form.elements.email.value;
  const repeatEmail = form.elements.repeatEmail.value;
  const password = form.elements.password.value;
  const repeatPassword = form.elements.repeatPassword.value;
  const isEmailMatch = email === repeatEmail;
  const isPasswordMatch = password === repeatPassword;
  const isPasswordValid = /^[a-zA-Z]{8,}$/.test(password);
  // const isInputValid = /^\S+@\S+\.\S+$/.test(email);

  setIsButtonDisabled(!(isEmailMatch && isPasswordMatch && isPasswordValid));
  setIsPasswordValid(isPasswordValid);
  setInputIsValid(isInputValid)
}


  return (
<div className="modal">
  <div className="modal-content">
    <span className="close" onClick={onClose}>&times;</span>
    <div className="modal-header">
      <p>Sign Up</p>
    </div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email </label>
      <input onChange={handleInputChange} placeholder="info@cherry.com" type="email" id="email" />
      <label htmlFor="email"> Repeat Email </label>
      <input onChange={handleInputChange} placeholder="info@cherry.com" type="email" id="repeatEmail" />
      <label htmlFor="password"> Password </label>
      <input onChange={handleInputChange} placeholder="your password" type="password" id="password" />
      <p className={isPasswordValid ? "i" : "i error"}><span>&#9432;</span>At least 8 characters and a mix of numbers.</p>
      <p className={isPasswordValid ? "i" : "i error"}><span>&#9432;</span>Must contain Upper & Lower case letters.</p>
      <p className={isPasswordValid ? "i" : "i error"}><span>&#9432;</span>No symbols.</p>
      <label htmlFor="password"> Repeat Password </label>
      <input onChange={handleInputChange} placeholder="your password" type="password" id="repeatPassword" />
      <button disabled={isButtonDisabled} className={isButtonDisabled ? "signup-button-disabled" : "signup-button-enabled"} type="submit">Register Account</button>
    </form>
    <div className="login-account">
       <p>Already have an account?</p>
      <Link to='/login' aria-label="Click to go to log in page">
        <button className='details-back-btn selector'>Log In</button>
        </Link>
    </div>
  </div>
</div>
  );
};

export default SignupModal;




  