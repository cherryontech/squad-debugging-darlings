import './App.css';
import { useState, useEffect } from 'react';
import SignupForm from './Components/SignupForm';

// this will need to be conditionally rendered: import LoginForm from './Components/LoginForm'

const App = () => {
  return (
    <>
      <div>
        <h1 className='app-title'>Get Started with Cherry On Tech!</h1>
        <SignupForm />
      </div>
    </>
  );
};



export default App;

