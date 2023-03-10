import "./App.css";
import { useState } from "react";
import { LoginModal } from "./Components/LoginModal";
import { SignupModal } from "./Components/SignupModal";
import { ProgressBarForm } from "./Components/ProgressBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const [showSignupModal, setSignupShowModal] = useState(true);
  const [showLoginModal, setLoginShowModal] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  return (
    <BrowserRouter>
      <div>
        {showSignupModal && (
          <SignupModal
            open={showSignupModal}
            openLoginModal={setLoginShowModal}
            closeSignupModal={setSignupShowModal}
            setAlertMsg={setAlertMsg}
          />
        )}
        {showLoginModal && !showSignupModal && (
          <LoginModal
            open={showLoginModal}
            closeLoginModal={setLoginShowModal}
            alertMsg={alertMsg}
            setAlertMsg={setAlertMsg}
          />
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
