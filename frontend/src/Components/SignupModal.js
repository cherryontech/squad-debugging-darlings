// import { useState, useEffect } from 'react';
// import '../CSS/SignupModal.css';
// import { Link } from 'react-router-dom';
// // import { Modal } from '@mui/material';

// export const SignupModal = ({open, openLoginModal, closeSignupModal}) => {
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [email, setEmail] = useState('');
//   const [emailConfirm, setEmailConfirm] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState('');

  
//   useEffect(() => {
//     const isValid = email && email === emailConfirm && password && password === passwordConfirm;
//     setIsButtonDisabled(!isValid); 
//   }, [email, emailConfirm, password, passwordConfirm]);


//   //need to check if email already in account
//   //visual error handling: see mockup
//   //send a user to the login if they have already got an account

// // useEffect(() => {
// //     const isValid = email && password && passwordConfirm && password === passwordConfirm;
// //     setIsButtonDisabled(!isValid); 
// //   }, [email, password, passwordConfirm]);

//   const handleSubmit = (event) => {
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
//       setEmail('');
//       setEmailConfirm('');
//       setPassword('');
//       setPasswordConfirm('');
//     })
//     .catch(error => console.log(error));
//     if(message === 'Email already exists') {
//       closeSignupModal(false)
//       openLoginModal(true)

//       //setting to state with the toggle
//     }
// };

//   return (
//     <div className="modal" open={open}>
//       <div className="modal-content">
//         {/* <span className="close" onClick={open}>&times;</span> */}
//         <div className="modal-header">
//           <p>Sign Up</p>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <label>Email</label>
//           <input type="email" value={email} placeholder="info@cherry.com" onChange={e => setEmail(e.target.value)} />
//           <label>Confirm Email</label>
//           <input type="email" value={emailConfirm} placeholder="info@cherry.com" onChange={e => setEmailConfirm(e.target.value)} />
//           <br />
//           <label>Password</label>
//           <input type="password" value={password} placeholder="your password" onChange={e => setPassword(e.target.value)} />
//           <br />
//           <p className="i"><span>&#9432;</span>At least 8 characters and a mix of numbers.</p>
//           <p className="i"><span>&#9432;</span>Must contain Upper & Lower case letters.</p>
//           <p className="i"><span>&#9432;</span>No symbols.</p>
//           <label>Confirm Password</label>
//           <input type="password" value={passwordConfirm} placeholder="your password" onChange={e => setPasswordConfirm(e.target.value)} />
//           <br />
//           <button disabled={isButtonDisabled} className={isButtonDisabled ? "signup-button-disabled" : "signup-button-enabled"} type="submit">Register Account</button>
//         </form>
//         <div className="login-account">
//           <p>Already have an account?</p>
//           <Link to='/login' aria-label="Click to go to log in page">
//             <button className='log-in-button'>Log In</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };


import { useState, useEffect } from 'react';
import '../CSS/SignupModal.css';
import { Link } from 'react-router-dom';
import { Modal } from '@mui/material';

export const SignupModal = ({ open, openLoginModal, closeSignupModal }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const isValid = email && email === emailConfirm && password && password === passwordConfirm;
    setIsButtonDisabled(!isValid); 
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
          closeSignupModal(false);
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
