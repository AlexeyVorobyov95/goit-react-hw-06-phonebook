import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactsItem } from './ContactsItem';
import { List } from './ContactsList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <List>
        {contacts.map(({ name, number, id }) => (
          <ContactsItem
            key={nanoid()}
            name={name}
            number={number}
            id={id}
            onClick={removeContact}
          />
        ))}
      </List>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
