import { ContactListStyled } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/contactsFilterSlice';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const handleFilterContact = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const visibleContacts = handleFilterContact().sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const noContacts = contacts.length === 0;
  const isContactsTrue = contacts.length > 0;
  const isVisibleContactsTrue = visibleContacts.length > 0;

  return (
    <ContactListStyled>
      {isLoading && noContacts
        ? 'Loading...'
        : isContactsTrue
        ? isVisibleContactsTrue
          ? visibleContacts.map(contact => (
              <Contact key={contact.id} contact={contact} />
            ))
          : 'No matches found'
        : 'Contacts list is empty'}
    </ContactListStyled>
  );
};
