import { Button } from 'components/ContactForm/ContactForm.styled'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'store/contacts/contactsSlice'
import { getContacts } from 'store/contacts/selectors'
import { getFilter } from 'store/filter/selectors'
import { List } from './ContactList.styled'

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
    dispatch(deleteContact(id))
  };
  
  return (
    <List>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <div>
            <p>☎ {contact.name}:</p>
            <p>{contact.number}</p>
            </div>
            <Button onClick={() => onDeleteBtn(contact.id)}>Delete</Button>
          </li>
        )

      })}
    </List>
  )
}
