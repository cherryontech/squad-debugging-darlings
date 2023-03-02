import './App.css';
import { useState, useEffect } from 'react';
import SignupModal from './Components/SignupModal'
import { Routes, Route } from 'react-router-dom';

//Routes need to be set up for link

// needed for the post

// app.post("/auth/signup", async (req, res) => {
//   const { email, password, password_confirm } = req.body;



export const postNewUser = (newUser) => {
  console.log("newUser", newUser)
   return fetch('http://localhost:3000/auth/signup', {
     method: 'POST',
     body: JSON.stringify({
       email: newUser.email,
       password: newItem.password,
       password_confirm: password_confirm
     }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
   })
  .then(response => response.json())
  .then(error => console.log(error))
}

const App = () => {
  const [showModal, setShowModal] = useState(true);
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <>
    <div>
      {/* <button onClick={toggleModal}>Sign Up</button> */}
      {showModal && <SignupModal onClose={toggleModal} />}
    </div>
  </>
  );
};

export default App;




