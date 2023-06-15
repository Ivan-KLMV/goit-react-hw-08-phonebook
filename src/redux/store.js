import { configureStore } from '@reduxjs/toolkit';
import { contactList } from './contactListSlice';
import { contactsFilter } from './contactsFilterSlice';

export const store = configureStore({
  reducer: { contacts: contactList, filter: contactsFilter },
});
