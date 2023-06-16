import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from 'redux/authorization/slice';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogIn = useSelector(isLoggedIn);
  console.log('RestrictedRoute', isLogIn);
  return isLogIn ? <Navigate to={redirectTo} /> : Component;
};
