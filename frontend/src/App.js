import './App.css';
import { useState, useEffect } from 'react';
import SignupModal from './Components/SignupModal'
import { Routes, Route } from 'react-router-dom';

//Routes need to be set up for link to work

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




