const { contactsInitialState } = require("./contacts/initialState");
const { filterInitialState } = require("./filter/initialStates");

const initialState = {
  contacts: contactsInitialState,
  filter: filterInitialState,
};