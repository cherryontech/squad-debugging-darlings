import React from 'react';
import { useState } from 'react';
import '../CSS/SignupModal.css'
import { Link } from 'react-router-dom';

  const SignupModal = ({ onClose }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function handleInputChange(event) {
    const inputs = event.target.form.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');
    let isAllFilled = true;
    inputs.forEach(input => {
      if (!input.value) {
        isAllFilled = false;
      }
    });
    setIsButtonDisabled(!isAllFilled);
  }

  return (
<div className="modal">
  <div className="modal-content">
    <span className="close" onClick={onClose}>&times;</span>
    <div className="modal-header">
      <p>Sign Up</p>
    </div>
    <form>
      <label htmlFor="email">Email </label>
      <input onChange={handleInputChange} placeholder="info@cherry.com" type="email" id="email" />
      <label htmlFor="email"> Repeat Email </label>
      <input onChange={handleInputChange} placeholder="info@cherry.com" type="email" id="repeatEmail" />
      <label htmlFor="password"> Password </label>
      <input onChange={handleInputChange} placeholder="your password" type="password" id="password" />
      <p className="i"><span>&#9432;</span>At least 8 characters and a mix of numbers.</p>
      <p className="i"><span>&#9432;</span>Must contain Upper & Lower case letters.</p>
      <p className="i"><span>&#9432;</span>No symbols.</p>
      <label htmlFor="password"> Repeat Password </label>
      <input onChange={handleInputChange} placeholder="your password" type="password" id="repeatPassword" />
      <button disabled={isButtonDisabled} className={isButtonDisabled ? "signup-button-disabled" : "signup-button-enabled"} type="submit">Sign Up</button>
    </form>
    <div>
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




  