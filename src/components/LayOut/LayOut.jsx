import {
  createTheme,
  ThemeProvider,
  Container,
  CssBaseline,
} from '@mui/material';
import { Outlet } from 'react-router-dom';

import TopMenu from 'components/TopMenu/TopMenu';
const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
    background: '#23242a',
  },
});

defaultTheme.typography.h4 = {
  letterSpacing: '2px',
};
const LayOut = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <TopMenu />
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default LayOut;
