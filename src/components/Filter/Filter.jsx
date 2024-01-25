import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selector';

const Filter = () => {
  const reduxQuery = useSelector(getFilter);
  const dispatch = useDispatch();
  const onReduxChange = text => dispatch(setFilter(text));
  const handleOnChangeFilter = ({ currentTarget }) => {
    onReduxChange(currentTarget.value);
  };

  return (
    <Box>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">
          Search by name
        </InputLabel>
        <Input
          id="filter"
          value={reduxQuery}
          onChange={handleOnChangeFilter}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default Filter;
