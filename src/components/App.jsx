import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/operations';
import { refreshCurrentUser } from 'redux/authorization/operations';
import { RegistrationForm, LogInForm } from './index';
import Phonebook from 'pages/Phonebook';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout';
import { isRefreshing } from 'redux/authorization/slice';
import { LinearProgress } from '@mui/material';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(isRefreshing);

  useEffect(() => {
    dispatch(refreshCurrentUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  return isRefresh ? (
    <LinearProgress />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
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
          index
          element={
            <RestrictedRoute
              redirectTo="contacts"
              component={<LogInForm title="Log In" />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
