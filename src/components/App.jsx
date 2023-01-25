import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount = () => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  };

  componentDidUpdate = () => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  createContact = ({ name, number }) => {
    const isContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContact) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(c => c.id !== contactId),
    }));
  };

  filterHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // Повертає новий масив.
  filterContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  render() {
    const { createContact, filterHandler, removeContact, filterContacts } =
      this;
    return (
      <>
        <h1>Phonebook</h1>
        <Form create={createContact} />
        <h2>Contacts</h2>
        <Filter filterContacts={filterHandler} value={this.state.filter} />
        <ContactList remove={removeContact} contacts={filterContacts()} />
      </>
    );
  }
}
