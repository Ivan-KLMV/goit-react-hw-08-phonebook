import { useDispatch, useSelector } from 'react-redux';
import { FormStyled, FormTitleStyled } from '../ContactForm/ContactForm.styled';
import { logIn } from 'redux/authorization/operations';
import { isLogError } from 'redux/authorization/slice';

export const LogInForm = ({ title }) => {
  const dispatch = useDispatch();
  const loginError = useSelector(isLogError);

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
      {loginError && <b style={{ color: 'red' }}>Wrong email or password</b>}
    </>
  );
};
