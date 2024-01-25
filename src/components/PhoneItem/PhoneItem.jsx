import PropTypes from 'prop-types';

import { TableRow, Button, TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contacts-operations';

const PhoneItem = ({ id, phone, name }) => {
  const dispatch = useDispatch();
  const onDeleteRedux = () => dispatch(deleteContact(id));
  return (
    <TableRow tabIndex={-1} key={id}>
      <TableCell component="th" id={id} scope="row" padding="none">
        {name}
      </TableCell>
      <TableCell>{phone}</TableCell>

      <TableCell align="right">
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => onDeleteRedux()}
          size="small"
          color="error"
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default PhoneItem;

PhoneItem.propTypes = {
  id: PropTypes.string,
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
