import './App.css';
import { useState } from 'react';
import { LoginModal } from './Components/LoginModal'
import { SignupModal } from './Components/SignupModal'

const App = () => {
  const [showSignupModal, setSignupShowModal] = useState(true);
  const [showLoginModal, setLoginShowModal] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  return (   
    <div>
      {showSignupModal && <SignupModal open={showSignupModal} openLoginModal={setLoginShowModal} closeSignupModal={setSignupShowModal} setAlertMsg={setAlertMsg} />}
      {showLoginModal && !showSignupModal && <LoginModal open={showLoginModal} closeLoginModal={setLoginShowModal} alertMsg={alertMsg} setAlertMsg={setAlertMsg} />}    
    </div>
  );
};

export default App;
