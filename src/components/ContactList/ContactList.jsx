import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from 'store/contacts/selectors'
import { deleteContactsThunk } from 'store/contacts/thunk'
import { getFilter } from 'store/filter/selectors'
import { List } from './ContactList.styled'
import { TiDelete } from 'react-icons/ti';
import { FaPhoneAlt } from 'react-icons/fa';

export const ContactList = () => {
  
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)

  const contacts = useSelector(getContacts)
  
    const getFilteredContacts = () => {
    const normilizedFilterValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilterValue)
    );
  };

  const filteredContacts = getFilteredContacts()
  
  const onDeleteBtn = id => {
    dispatch(deleteContactsThunk(id))
  };
  
  return (
    <List>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <div>
              <FaPhoneAlt size='18'/>
            <p> {contact.name}:</p>
            <p>{contact.phone}</p>
            </div>
            <button onClick={() => onDeleteBtn(contact.id)}><TiDelete size='24'/></button>
          </li>
        )

      })}
    </List>
  )
}
