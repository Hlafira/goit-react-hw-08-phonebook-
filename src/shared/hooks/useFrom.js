import { useState } from 'react';
import { matchIsValidTel } from 'mui-tel-input';

export const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState(initialState);
  const [valid, setValid] = useState(false);

  const handleChangeByValue = (fieldName, newValue) => {
    console.log(newValue);
    setState(prevState => ({ ...prevState, [fieldName]: newValue }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(state);
    setState(initialState);
    const form = evt.target;
    form.reset();
  };

  const handleOnChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return { state, handleSubmit, handleOnChange, handleChangeByValue, valid };
};
