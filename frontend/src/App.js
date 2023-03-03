import './App.css';
import { useState, useEffect } from 'react';
import SignupModal from './Components/SignupModal.js'
// import LoginModal from './Components/LoginModal.js'
// import { Routes, Route } from 'react-router-dom';

//Routes need to be set up for router (will need for user to switch to a login modal)

const App = () => {
  const [showModal, setShowModal] = useState(true);
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <>
    <div>
      {/* <button onClick={toggleModal}>Sign Up</button> */}
      {showModal && <SignupModal onClose={toggleModal} />}
    </div>
  </>
  );
};

export default App;

// import './App.css';
// import { useState } from 'react';
// import SignupModal from './Components/SignupModal';
// import LoginModal from './Components/LoginModal';

// const App = () => {
//   const [showSignUpModal, setShowSignUpModal] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   const handleLoginClick = () => {
//     setShowSignUpModal(false);
//     setShowLoginModal(true);
//   };

//   const handleSignupClick = () => {
//     setShowSignUpModal(true);
//     setShowLoginModal(false);
//   };

//   return (
//     <>
//       <div className="app-container">
//         <h1>Welcome to Cherry on Tech</h1>
//         <p>Please login or register to continue</p>
//         <button onClick={handleSignupClick}>Register</button>
//         <button onClick={handleLoginClick}>Login</button>
//       </div>
//       {showLoginModal && <LoginModal />}
//       {showSignUpModal && <SignupModal />}
//     </>
//   );
// };

// export default App;
