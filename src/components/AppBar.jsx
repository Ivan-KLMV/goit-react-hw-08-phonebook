import Home from 'pages/Home';
import { NavLink, Route, Routes } from 'react-router-dom';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import Phonebook from 'pages/Phonebook';
import { LogInForm } from './LogInForm/LogInForm';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
  return (
    <>
      <nav style={{ display: 'flex', gap: '15px' }}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/contacts">Phonebook</NavLink>
        <NavLink to="/register">Registration</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <UserMenu />
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Phonebook />} />
        <Route
          path="/register"
          element={<RegistrationForm title="Registration" />}
        />
        <Route path="/login" element={<LogInForm title="Log In" />} />
      </Routes>
    </>
  );
};
