import Home from 'pages/Home';
import { NavLink, Route, Routes } from 'react-router-dom';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import Phonebook from 'pages/Phonebook';
import { LogInForm } from './LogInForm/LogInForm';
import { UserMenu } from './UserMenu';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/authorization/slice';

export const AppBar = () => {
  const isLogIn = useSelector(isLoggedIn);
  return (
    <>
      <nav style={{ display: 'flex', gap: '15px' }}>
        {/* <NavLink to="/" end>
          Home
        </NavLink> */}
        {isLogIn ? (
          <>
            <NavLink to="/contacts">Phonebook</NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to="/register">Registration</NavLink>
            <NavLink to="/" end>
              Log In
            </NavLink>
          </>
        )}
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/" component={<Phonebook />} />}
        />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationForm title="Registration" />}
            />
          }
        />
        <Route
          path="/"
          element={
            <RestrictedRoute
              redirectTo="contacts"
              component={<LogInForm title="Log In" />}
            />
          }
        />
      </Routes>
    </>
  );
};
