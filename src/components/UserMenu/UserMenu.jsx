const { Stack, Typography } = require('@mui/material');
const { useState } = require('react');

const init = {
  email: 'someemail@gmail.com',
  isLogin: true,
};

const UserMenu = () => {
  const [user, setUser] = useState(init);

  return (
    <>
      <Typography>{user.email}</Typography>
      <Button variant="outlined">LogOut</Button>
    </>
  );
};
