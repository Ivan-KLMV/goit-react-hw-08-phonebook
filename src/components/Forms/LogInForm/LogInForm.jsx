import { useDispatch } from 'react-redux';
import { FormStyled, FormTitleStyled } from '../ContactForm/ContactForm.styled';
import { logIn } from 'redux/authorization/operations';

export const LogInForm = ({ title }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(logIn(user));
  };

  return (
    <>
      <FormTitleStyled>{title}</FormTitleStyled>
      <FormStyled onSubmit={handleSubmit} autoComplete="off">
        <label>
          email
          <input type="email" name="email" required />
        </label>
        <label>
          password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </FormStyled>
    </>
  );
};
