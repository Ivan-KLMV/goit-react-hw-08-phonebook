import { useDispatch } from 'react-redux';
import { AppContainer } from './App.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { AppBar } from 'components/AppBar';
import { currentUser } from 'redux/authorization/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <AppBar />
    </AppContainer>
  );
};
