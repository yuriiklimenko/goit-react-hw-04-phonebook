import { useState, useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contactsArray')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contactsArray', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = ({ name, number }) => {
    const isContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContact) {
      return alert(`${name} is already in contacts`);
    }

    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const removeContact = contactId => {
    setContacts(contacts.filter(c => c.id !== contactId));
  };

  const filterHandler = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <h1>Phonebook</h1>
      <Form create={createContact} />
      <h2>Contacts</h2>
      <Filter filterContacts={filterHandler} value={filter} />
      <ContactList remove={removeContact} contacts={filterContacts()} />
    </>
  );
}
