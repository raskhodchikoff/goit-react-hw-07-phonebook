import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selector';
import { deleteContact } from 'redux/operations';

import { Button, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter).toLowerCase();

  const filteringContact = () =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  const filteredContacts = filteringContact();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </ul>
  );
};
