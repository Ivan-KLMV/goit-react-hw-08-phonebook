import { FormStyled, FormTitleStyled } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import {
  selectAddIsLoading,
  selectContacts,
} from 'redux/contacts/contactsSlice';

export const ContactForm = ({ title }) => {
  const isLoading = useSelector(selectAddIsLoading);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: e.target[0].value,
      number: e.target[1].value,
    };

    if (contacts.map(contact => contact.name).includes(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    dispatch(addContact(contact));
    e.target.reset();
    [...e.currentTarget].map(item => item.nodeName === 'INPUT' && item.blur());
  };

  return (
    <>
      <FormTitleStyled>{title}</FormTitleStyled>
      <FormStyled onSubmit={handleSubmit}>
        <label>
          name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button
          className={isLoading ? 'addIsLoading' : undefined}
          disabled={isLoading}
          type="submit"
        >
          add contact
        </button>
      </FormStyled>
    </>
  );
};
