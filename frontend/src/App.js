import './App.css';
import { useState } from 'react';
import { LoginModal } from './Components/LoginModal.js'
import { SignupModal } from './Components/SignupModal.js'

const App = () => {
  const [showSignupModal, setSignupShowModal] = useState(true);
  const [showLoginModal, setLoginShowModal] = useState(false);

  return (   
    <div>
      {showSignupModal && <SignupModal open={showSignupModal} openLoginModal={setLoginShowModal} closeSignupModal={setSignupShowModal}/>}
      {showLoginModal && !showSignupModal && <LoginModal open={showLoginModal} closeLoginModal={setLoginShowModal}/>}    
    </div>
  );
};

export default App;
