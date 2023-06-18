import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn, isRefreshing } from 'redux/authorization/slice';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogIn = useSelector(isLoggedIn);
  const isRefresh = useSelector(isRefreshing);
  const shouldRedirect = !isLogIn && !isRefresh;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
