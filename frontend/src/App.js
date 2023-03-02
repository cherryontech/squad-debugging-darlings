import './App.css';
import { useState, useEffect } from 'react';
import SignupModal from './Components/SignupModal'
import { Routes, Route } from 'react-router-dom';

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




