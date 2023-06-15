import { useDispatch } from 'react-redux';
import { ContactForm, ContactList, Filter } from '../index';
import { AppContainer } from './App.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <h1>phonebook</h1>
      <ContactForm />
      <h2>contacts</h2>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
