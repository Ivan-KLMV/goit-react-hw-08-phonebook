import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isLoggedIn } from 'redux/authorization/slice';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';

export const Navigation = () => {
  const isLogIn = useSelector(isLoggedIn);

  return (
    <nav style={{ display: 'flex', gap: '15px' }}>
      {isLogIn ? (
        <>
          <NavLink to="/contacts">Phonebook</NavLink>
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
      <NavLink to="/mui">MUI Page</NavLink>
    </nav>
  );
};
