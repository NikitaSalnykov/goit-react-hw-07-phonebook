import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContacts, deleteContacts, fetchContacts } from "services/contactsAPI";

export const getContactsThunk = createAsyncThunk('contacts/get', () =>
  fetchContacts())

export const createContactsThunk = createAsyncThunk('contacts/create', (data) =>
createContacts(data))

export const deleteContactsThunk = createAsyncThunk('contacts/delete', (id) =>
deleteContacts(id))


