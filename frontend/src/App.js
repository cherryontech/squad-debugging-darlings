import './App.css';
// import { useState, useEffect } from 'react';
// import SignupForm from './Components/SignupForm';
// import Nav from './Components/Nav';
import SignupModal from './Components/SignupModal'
// import { Routes, Route, useLocation } from 'react-router-dom';


import { useState } from 'react';


const App = () => {
  const [showModal, setShowModal] = useState(false);
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <>
    <div>
      <button onClick={toggleModal}>Sign Up</button>
      {showModal && <SignupModal onClose={toggleModal} />}
    </div>
  </>
  );
};

export default App;


// this will need to be conditionally rendered: import LoginForm from './Components/LoginForm'

// const App = () => {
//   return (
//     <>
//         <Nav />
//       <div className='welcome-msg-div'>
//         <h1 className='app-title'>Get Started with Cherry On Tech!</h1>
//         <p className='register'>Register with your email</p>
//       </div>
//       <div>
//         <SignupForm />
//       </div>
//     </>
//   );
// };



// export default App;

