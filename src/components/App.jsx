import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { fetchContacts } from 'redux/contacts/operations';
import { refreshCurrentUser } from 'redux/authorization/operations';
// import { RegistrationForm, LogInForm } from './index';
// import Phonebook from 'pages/Phonebook';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout';
import { isRefreshing } from 'redux/authorization/slice';
import MUI from 'pages/MUI';

const PhonebookePage = lazy(() => import('../pages/Phonebook'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(isRefreshing);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefresh ? (
    <b>Page is reloading...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/" component={<PhonebookePage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          index
          element={
            <RestrictedRoute redirectTo="contacts" component={<LoginPage />} />
          }
        />
      </Route>
      <Route path="/mui" element={<MUI />} />
    </Routes>
  );
};
