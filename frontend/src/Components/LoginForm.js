import * as React from 'react';
import { Box, Button, TextField } from '@mui/material';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
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

export default LoginForm;
