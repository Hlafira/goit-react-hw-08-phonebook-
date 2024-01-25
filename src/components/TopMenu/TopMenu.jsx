import { Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NavLink } from 'react-router-dom';

const NavBox = styled(Stack)(({ theme }) => ({
  padding: '0.4em 0',
  borderBottom: `1px solid ${theme.palette.primary.light}`,

  display: 'flex',
  justifyContent: ' space-between',
  gap: '0.4em',
}));

const TopMenu = () => {
  return (
    <>
      <NavBox component={'nav'} direction="row">
        <Button component={NavLink} to="/contacts">
          Contacts
        </Button>
        <Stack sx={{ display: 'flex', gap: '1em' }} direction="row">
          
        </Stack>
      </NavBox>
    </>
  );
};

export default TopMenu;
