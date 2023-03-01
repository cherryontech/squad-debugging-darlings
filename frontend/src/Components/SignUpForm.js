import React from 'react';

const SignInModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="email">Email </label>
          <input placeholder="info@cherry.com" type="email" id="email" />
          <label htmlFor="email"> Repeat Email </label>
          <input placeholder="info@cherry.com" type="email" id="email" />
          <label htmlFor="password"> Password </label>
          <input placeholder="your password" type="password" id="password" />
          <label htmlFor="password"> Repeat Password </label>
          <input placeholder="your password" type="password" id="password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;


// import { Box, Button, TextField } from '@mui/material';
// import '../CSS/SignupForm.css'


// const SignupForm = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // handle form submission logic
//   };

//   //button will need to begin as disabled 
//   //see color palate in figma

//   return (
//     <div className='form-div'>
//       <Box className='signup-box' sx={{ width: { xs: '100%', sm: 600 },  display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Email"
//             margin="normal"
//             required
//             fullWidth
//             autoFocus
//           />
//           <TextField
//             label="Repeat Email"
//             margin="normal"
//             required
//             fullWidth
//             autoFocus
//           />
//           <TextField
//             label="Password"
//             type="password"
//             margin="normal"
//             required
//             fullWidth
//           />
//           <TextField
//             label="Repeat Password"
//             type="password"
//             margin="normal"
//             required
//             fullWidth
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             sx={{ mt: 3, mb: 2}}
//             style={{backgroundColor: 'green'}}
//           >
//             Register
//           </Button>
//         </form>
//       </Box>
//     </div>
//   );
// };

// export default SignupForm;
