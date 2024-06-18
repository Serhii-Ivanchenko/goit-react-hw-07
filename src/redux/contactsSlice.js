import { initialState } from './initialState';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ name, number }) => {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;

export const selectContacts = state => state.contacts.items;
