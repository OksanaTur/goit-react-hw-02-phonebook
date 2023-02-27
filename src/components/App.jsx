import React, { Component } from 'react';
import { PhonebookForm } from "./PhonebookForm/Phonebook";
import { PhonebookFilter } from './PhonebookFilter/PhonebookFilter';
import { Container } from './App.styled';
import { PhonebookList } from './PhonebookList/PhonebookList';


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
  onFormSubmit = ({ id, name, number }) => {
    const contact = { id, name, number };
    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] }
    });
  };

  onFilter = evt => {
    this.setState({
      filter: evt.target.value,
    })
  };

  onDeleteHandler = id => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact => contact.id !== id),
    }))
  }

  onFilterContacts = () => {
    let filterContact = [];
    if (this.state.filter) {
      filterContact = this.state.contacts.filter(
        contact =>
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter)
      ) 
      }else {
        return this.state.contacts;
    }
    return filterContact;
  }
  
  render() {
    const { contacts, filter } = this.state;
    
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.onFormSubmit} contacts={contacts} />
        <h2>Contacts</h2>
        <PhonebookFilter onFilter={this.onFilter} filter={filter} />
        <PhonebookList
          contacts={contacts}
          filter={filter}
          onDelete={this.onDeleteHandler}
          filterContacts={this.onFilterContacts}
        />

</Container>
  )
  }
}
  

