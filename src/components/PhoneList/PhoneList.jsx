//import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Table, TableContainer, TableBody, Box } from '@mui/material';

import PhoneItem from '../PhoneItem/PhoneItem';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';
import { fetchContacts } from 'redux/contacts/contacts-operations';

const PhoneList = () => {
  const filteredPhoneList = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ width: '100%', minWidth: 500 }}>
      <TableContainer>
        <Table aria-labelledby="tableTitle">
          <TableBody>
            {filteredPhoneList.map(({ id, name, phone }) => {
              return <PhoneItem key={id} name={name} phone={phone} id={id} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PhoneList;
