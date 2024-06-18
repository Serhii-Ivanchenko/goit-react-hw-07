import { fetchContacts, deleteContact, addContact } from './contactsOps';
import { initialState } from './initialState';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    // addContact: {
    //   reducer: (state, action) => {
    //     state.items.push(action.payload);
    //   },
    //   prepare: ({ name, number }) => {
    //     return {
    //       payload: {
    //         name,
    //         number,
    //         id: nanoid(),
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

// export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;

export const selectContacts = state => state.contacts.items;
