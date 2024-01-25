import { useDispatch } from 'react-redux';
import { Box, TextField, Button } from '@mui/material';

import { initialState } from './initialState';
import { useForm } from '../../shared/hooks/useFrom';
import { addContact } from '../../redux/contacts/contacts-operations';
import { styled } from '@mui/material/styles';
import { MuiTelInput } from 'mui-tel-input';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const FormBox = styled(Box)(({ theme }) => ({
  padding: '1.5em 2.2em',
  border: '3px solid #1c1c1c',
  borderRadius: '8px',
  marginTop: '2em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.4em',
}));

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = ({ name, phone }) => {
    dispatch(addContact({ name, phone }));
  };

  const { state, handleSubmit, handleOnChange, handleChangeByValue } = useForm({
    initialState,
    onSubmit: onAddContact,
  });

  return (
    <FormBox component="form" onSubmit={handleSubmit} maxWidth="xs">
      <TextField
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
        inputProps={{ pattern: "[A-ZА-Я][a-zA-Zа-яА-Я.'s]*" }}
        helperText="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer"
        onChange={handleOnChange}
        value={state.name}
        variant="standard"
      />
      {/* <label className={styles.label}>
        <input className={styles.input} type="text" name="name" />
        <span>Name</span>
      </label> */}
      <MuiTelInput
        required
        margin="normal"
        fullWidth
        id="phone"
        label="Phone number"
        name="phone"
        title="Enter a valid phone number like 865-211-4452 or +380-097-355-8092"
        onChange={val => handleChangeByValue('phone', val)}
        helperText="Input correct phone number"
        value={state.phone}
        variant="standard"        
      />
      <Button type="submit" variant="contained" startIcon={<SaveAltIcon />}>
        Add contact
      </Button>
    </FormBox>
  );
};

export default ContactForm;
