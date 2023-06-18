import { useDispatch } from 'react-redux';
import { FormStyled, FormTitleStyled } from '../ContactForm/ContactForm.styled';
import { registration } from 'redux/authorization/operations';

export const RegistrationForm = ({ title }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(registration(user));
  };

  return (
    <>
      <FormTitleStyled>{title}</FormTitleStyled>
      <FormStyled onSubmit={handleSubmit} autoComplete="off">
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
          email
          <input type="email" name="email" required />
        </label>
        <label>
          password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </FormStyled>
    </>
  );
};
