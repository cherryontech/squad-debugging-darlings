import "./App.css";
import { useState } from "react";
import { LoginModal } from "./Components/LoginModal";
import { SignupModal } from "./Components/SignupModal";
import { Routes, Route } from "react-router-dom";
import ProgressBarForm from "./Components/ProgressBarForm";
import SecondProgressBarForm from "./Components/SecondProgressBarForm";
import ThirdProgressBarForm from "./Components/ThirdProgressBarForm";
import { AuthProvider } from "./Context/AuthContext";
// import MenteeRole from "./Components/MenteeRole";
// import MentorRole from "./Components/MentorRole";
import RoleSelection from "./Components/RoleSelection";

const App = () => {
  const [alertMsg, setAlertMsg] = useState("");

  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/signup"
          element={<SignupModal setAlertMsg={setAlertMsg} />}
        />
        <Route
          path="/login"
          element={<LoginModal alertMsg={alertMsg} setAlertMsg={setAlertMsg} />}
        />
        <Route path="/setup-profile-1" element={<ProgressBarForm />} />
        <Route path="/setup-profile-2" element={<SecondProgressBarForm />} />
        <Route path="/setup-profile-3" element={<ThirdProgressBarForm />} />
        <Route
          path="/mentee-flow-1"
          element={
            <RoleSelection
              lala="mentor"
              question="What role are you interested in pursuing?"
            />
          }
        />
        <Route
          path="/mentor-flow-1"
          element={
            <RoleSelection
              lala="mentee"
              question="What is your current role?"
            />
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
