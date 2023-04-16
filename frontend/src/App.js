import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import {
  TitleSelection,
  LoginModal,
  SignupModal,
  SecondProgressBarForm,
  ThirdProgressBarForm,
  ProgressBarForm,
  Calendly,
  IndustrySelection,
  LandingPage,
} from "./Components";
import MatchFlow from "./constants/MatchFlow";

const App = () => {
  const [alertMsg, setAlertMsg] = useState("");

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
          path="/mentor-flow-1"
          element={
            <TitleSelection
              matchedWith="mentee"
              question={MatchFlow.mentorQues1}
            />
          }
        />
        <Route
          path="/mentee-flow-1"
          element={
            <TitleSelection
              matchedWith="mentor"
              question={MatchFlow.menteeQues1}
            />
          }
        />
        <Route path="/mentor-flow-2" 
        element={
        <IndustrySelection 
        matchedWith="mentee"
        question={MatchFlow.mentorQues2} 
        />
        }
        />
         <Route path="/mentee-flow-2" 
         element={
         <IndustrySelection
          matchedWith="mentor"
          question={MatchFlow.menteeQues2} 
          />
        } 
        />
        
        <Route path="/mentor-flow-4" element={<Calendly />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
