import { useEffect, useState } from 'react';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ConatctList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

import { IValues } from './components/ContactForm/ContactForm.types';

import css from './App.module.css';

function App() {
  const [contacts, setContacts] = useState<IValues[]>(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact: IValues): void => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = (idContact: string): void => {
    setContacts(prevContacts => prevContacts.filter(({ id }) => id !== idContact));
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <main className={css.main}>
      <Container>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm addContact={addContact} />
        {contacts.length > 0 && (
          <SearchBox searchName={searchName} updateSearchName={setSearchName} />
        )}
        <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      </Container>
    </main>
  );
}

export default App;
