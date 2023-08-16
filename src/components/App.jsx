import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'store/contacts/selectors';
import { getContactsThunk } from 'store/contacts/thunk';
import { DivContainer, Section } from './App/App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';

export const App = () => {

  
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
         <Section>
      <DivContainer>
        <h2>Phonebook</h2>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        {isLoading ? <ContactList/> : <Loader/>}
         </DivContainer>
    </Section>

  );
};
