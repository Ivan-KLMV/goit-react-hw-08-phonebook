import { createSlice } from '@reduxjs/toolkit';

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(_, action) {
      return action.payload;
    },
  },
});

export const selectFilter = state => state.filter;
export const contactsFilter = contactsFilterSlice.reducer;
export const { filterContacts } = contactsFilterSlice.actions;
