import "./App.css";
import { useState } from "react";
import { LoginModal } from "./Components/LoginModal";
import { SignupModal } from "./Components/SignupModal";
import { Routes, Route } from "react-router-dom";
import ProgressBarForm from "./Components/ProgressBarForm";
import SecondProgressBarForm from "./Components/SecondProgressBarForm";
import ThirdProgressBarForm from "./Components/ThirdProgressBarForm";
import { AuthProvider } from "./Context/AuthContext";
import MenteeRole from "./Components/MenteeRole";
import IndustrySelection from "./Components/IndustrySelection";

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
            element={
              <LoginModal alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
            }
          />
          <Route path="/setup-profile-1" element={<ProgressBarForm />} />
          <Route path="/setup-profile-2" element={<SecondProgressBarForm />} />
          <Route path="/setup-profile-3" element={<ThirdProgressBarForm />} />
          <Route path="/mentee-flow-1" element={<MenteeRole />} />
          <Route 
          path="/industry-selection" 
          element={ <IndustrySelection matchedWith="mentee" industryQuestion="In which industries do you have experience? Select up to 5!" />} />
          <Route path="/industry-selection" element={
            <IndustrySelection
            matchedWith="mentor"
            industryQuestion="Select up to 5 industries of interest!" />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
