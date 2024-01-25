import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material/';

import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import PhoneList from '../components/PhoneList/PhoneList';

const PhoneBookPage = () => {
  return (
    <>
      <Typography component="h1" variant="h4">
        Phone book
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={12} md={5} lg={4}>
          <ContactForm />
        </Grid>
        <Grid item sm={12} md={7} lg={8}>
          <Filter />
          <PhoneList />
        </Grid>
      </Grid>
    </>
  );
};
export default PhoneBookPage;
