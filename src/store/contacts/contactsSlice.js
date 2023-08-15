import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { contactsInitialState } from "./initialState";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    contactReduce(state, action) {
      state.contacts = action.payload
    },
 addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number, 
          },
        };
      },
    },
    deleteContact(state, action) {
    state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    }
  }
})

export const contactsReducer = contactsSlice.reducer
export const {addContact, contactReduce, deleteContact} = contactsSlice.actions