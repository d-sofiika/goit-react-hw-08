import {  createSlice } from "@reduxjs/toolkit";
import { fetchContact, addContact, deleteContact } from "./operations"



const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
    items: [],
    isLoading: false,
    error: null,
  },extraReducers: builder => {
    builder
      .addCase(fetchContact.pending, handlePending)
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null;
        state.items = action.payload
          console.log("State items after fetch:", state.items);
      })
      .addCase(fetchContact.rejected, handleRejected)
      
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const idToDelete = action.payload;
      state.items = state.items.filter(contact => contact.id !== idToDelete);
      })
      .addCase(deleteContact.rejected, handleRejected)

  },
         } 

)



export const contactReducer = contactSlice.reducer;