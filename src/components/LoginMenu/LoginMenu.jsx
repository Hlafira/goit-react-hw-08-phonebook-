import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const LoginMenu = () => {
  return (
    <>
      <Button component={NavLink} to="/register" variant="outlined">
        Register
      </Button>

      <Button component={NavLink} to="/login" variant="outlined">
        Login
      </Button>
    </>
  );
};

export default LoginMenu;
