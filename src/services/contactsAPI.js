import axios from 'axios';


export const fetchContacts = async () => {
  const resp = await axios.get(`https://64db8bde593f57e435b11e05.mockapi.io/contacts`);
  return resp.data;
};

export const createContacts = async (contactData) => {
  const resp = await axios.post(`https://64db8bde593f57e435b11e05.mockapi.io/contacts`, contactData);
  return resp.data;
}; 

export const deleteContacts = async (id) => {
  const resp = await axios.delete(`https://64db8bde593f57e435b11e05.mockapi.io/contacts/${id}`);
  return resp.data;
}; 