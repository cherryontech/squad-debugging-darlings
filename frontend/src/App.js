import "./App.css";
import { useState } from "react";
import { LoginModal } from "./Components/LoginModal";
import { SignupModal } from "./Components/SignupModal";
import { Routes, Route } from "react-router-dom";
import ProgressBarForm from "./Components/ProgressBarForm";

const App = () => {
  // const [showSignupModal, setSignupShowModal] = useState(true);
  // const [showLoginModal, setLoginShowModal] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  return (
    <div>
      <Routes>
        <Route
          path="/signup"
          element={<SignupModal setAlertMsg={setAlertMsg} />}
        />
        <Route path="/setup-profile" element={<ProgressBarForm />} />
        {/* <Route
          path="/login"
          element={
            showLoginModal &&
            !showSignupModal && (
              <LoginModal
                open={showLoginModal}
                closeLoginModal={setLoginShowModal}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
              />
            )
          }
        /> */}
      </Routes>
    </div>
  );
};

export default App;
