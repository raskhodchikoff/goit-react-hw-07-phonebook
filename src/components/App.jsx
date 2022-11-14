import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { MainTitle, ContactsTitle } from './App.styled';
import { Box } from './Box';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selector';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      as="main"
      mx="auto"
      mt={5}
      width="400px"
      p={5}
      bg="mainBgr"
      border="m"
      borderRadius="m"
      borderColor="greyBorder"
      boxShadow="shadow"
    >
      <Box as="section" mb={3}>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
      </Box>
      <Box as="section">
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        {isLoading && !error && <b>Your request is being processed...</b>}
        {error && <p> {error} </p>}
        <ContactList />
      </Box>
    </Box>
  );
};
