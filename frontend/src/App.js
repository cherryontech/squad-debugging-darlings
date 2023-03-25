import "./App.css";
import { useState } from "react";
import { LoginModal } from "./Components/LoginModal";
import { SignupModal } from "./Components/SignupModal";
import { Routes, Route } from "react-router-dom";
import ProgressBarForm from "./Components/ProgressBarForm";
import SecondProgressBarForm from "./Components/SecondProgressBarForm";
import ThirdProgressBarForm from "./Components/ThirdProgressBarForm";
import { AuthProvider } from "./Context/AuthContext";

const App = () => {
  const [alertMsg, setAlertMsg] = useState("");

  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route
            path="/signup"
            element={<SignupModal setAlertMsg={setAlertMsg} />}
          />
          <Route
            path="/login"
            element={
              <LoginModal alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
            }
          />
          <Route path="/setup-profile-1" element={<ProgressBarForm />} />
          <Route path="/setup-profile-2" element={<SecondProgressBarForm />} />
          <Route path="/setup-profile-3" element={<ThirdProgressBarForm />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
