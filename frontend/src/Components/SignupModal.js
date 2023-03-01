import React from 'react';
import { useState } from 'react';
import '../CSS/SignupModal.css'

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
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="email">Email </label>
          <input onChange={handleInputChange} placeholder="info@cherry.com" type="email" id="email" />
          <label htmlFor="email"> Repeat Email </label>
          <input onChange={handleInputChange} placeholder="info@cherry.com" type="email" id="repeatEmail" />
          <label htmlFor="password"> Password </label>
          <input onChange={handleInputChange} placeholder="your password" type="password" id="password" />
          <label htmlFor="password"> Repeat Password </label>
          <input onChange={handleInputChange} placeholder="your password" type="password" id="repeatPassword" />
          <button disabled={isButtonDisabled} className={isButtonDisabled ? "signup-button-disabled" : "signup-button-enabled"} type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;


  