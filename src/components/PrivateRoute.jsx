import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from 'redux/authorization/slice';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogIn = useSelector(isLoggedIn);

  return !isLogIn ? <Navigate to={redirectTo} /> : Component;
};
