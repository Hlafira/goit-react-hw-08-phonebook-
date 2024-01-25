import './styles/shared.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LayOut from 'components/LayOut/LayOut';
import PhoneBookPage from 'pages/PhoneBookPage';
import RegistrationPage from 'pages/RegistrationPage';

import LoginPage from 'pages/LoginPage';

export const App = () => {
  return (
    <BrowserRouter className="App" basename="/goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/contacts" element={<PhoneBookPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <ThemeProvider theme={defaultTheme}>
    //   <Container component="main" maxWidth="xl">
    //     <CssBaseline />
    //     <Typography component="h1" variant="h4">
    //       Phone book
    //     </Typography>
    //     <Grid container spacing={2}>
    //       <Grid item sm={12} md={5} lg={4}>
    //         <ContactForm />
    //       </Grid>
    //       <Grid item sm={12} md={7} lg={8}>
    //         <Filter />
    //         <PhoneList />
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </ThemeProvider>
  );
};
