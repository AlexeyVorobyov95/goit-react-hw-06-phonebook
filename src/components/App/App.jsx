import { GlobalStyles } from 'components/GlobalStyles';
import { ContactsList } from 'components/Contacts/ContactsList';
import { ContactForm } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContainerPhoneBook, Title, Text } from 'components/App/App.styled';
import { getContacts, getStatusFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const getFilter = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <GlobalStyles />
      <ContainerPhoneBook>
        <ContactForm />
        <div>
          <Filter />
          <Title>Contacts</Title>
          {contacts.length === 0 ? (
            <Text>The phonebook is empty. Please add a contact.</Text>
          ) : getFilter.length > 0 ? (
            <ContactsList contacts={getFilter} />
          ) : (
            <Text>Contact not found</Text>
          )}
        </div>
      </ContainerPhoneBook>
    </>
  );
}
