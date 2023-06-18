import { ContactForm, ContactList, Filter } from '../components/index';

const Phonebook = () => {
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
