import { useEffect } from 'react';
import { ContactForm, ContactList, Filter } from '../components/index';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const Phonebook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('mounting phonebook');
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactForm title="phonebook" />
      <h2 style={{ marginBottom: '20px', textTransform: 'capitalize' }}>
        contacts
      </h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Phonebook;
