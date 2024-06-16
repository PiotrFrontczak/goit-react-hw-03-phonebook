import React, { Component } from 'react';
import ContactList from './Contacts/ContactList';
import AddContactForm from './Contacts/AddContactForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact]
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  render() {
    return (
      <div>
        <h1>Phone Book</h1>
        <AddContactForm addContact={this.addContact} />
        <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
