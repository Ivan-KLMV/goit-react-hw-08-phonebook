import { ContactForm, ContactList, Filter } from '../components/index';

const Phonebook = () => {
  return (
    <>
      <ContactForm title="phonebook" />
      <h2>contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Phonebook;
