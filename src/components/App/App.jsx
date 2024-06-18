import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.loading);
  const isError = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ContactList />
    </div>
  );
}

export default App;
