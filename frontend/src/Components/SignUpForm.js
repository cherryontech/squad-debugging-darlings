import { Box, Button, TextField } from '@mui/material';
import '../CSS/SignupForm.css'


const SignupForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic
  };

  //button will need to begin as disabled 
  //see color palate in figma

  return (
    <Box className='signup-box' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          margin="normal"
          required
          fullWidth
          autoFocus
        />
        <TextField
          label="Password"
          type="password"
          margin="normal"
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign in
        </Button>
      </form>
    </Box>
  );
};

export default SignupForm;
