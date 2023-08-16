import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { contactsInitialState } from "./initialState";
import { createContactsThunk, deleteContactsThunk, getContactsThunk } from "./thunk";

const arrayThunks = [createContactsThunk, deleteContactsThunk, getContactsThunk]
const thunkType = (type) => arrayThunks.map(thunk => thunk[type]) 

const handlePending = (state) => {
  state.isLoading = false;
}

const handleRejected = (state, {payload}) => {
      state.isLoading = false;
       state.error = payload
}

const defaulteFulfilled = (state) => { 
        state.isLoading = true
        state.error = ''
 }

const handleFulfilledGet = (state,  {payload}) => {
      state.contacts = payload

}

const handleFulfilledCreate = (state,  {payload}) => {
      state.contacts.push(payload)
}

const handleFulfilledDelete = (state,  {payload}) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload.id)
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...thunkType('pending')), handlePending)
      .addMatcher(isAnyOf(...thunkType('rejected')), handleRejected)
       .addMatcher(isAnyOf(...thunkType('fulfilled')), defaulteFulfilled)
  }
  }
)

export const contactsReducer = contactsSlice.reducer
export const {addContact, contactReduce, deleteContact} = contactsSlice.actions

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     contactReduce(state, action) {
//       state.contacts = action.payload
//     },
//  addContact: {
//       reducer(state, action) {
//         state.contacts.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             number, 
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//     state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
//     }
//   }
// })

// export const contactsReducer = contactsSlice.reducer
// export const {addContact, contactReduce, deleteContact} = contactsSlice.actions