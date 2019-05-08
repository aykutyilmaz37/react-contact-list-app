import React, { Component } from 'react';
import '../App.css';
import Contacts from './Contacts';

class App extends Component {
  constructor(){
    super();
    this.addContact = this.addContact.bind(this);
  }
  state = {
    contacts: [{
      name: "Ahmet",
      phone: "5999999999"
    },
    {
      name: "Mehmet",
      phone: "5888888888"
    }
    ]
  };
  addContact (contact){
    console.log(contact);
    const {contacts} = this.state;
    contacts.push(contact);
    this.setState({
      contacts
    })
  }
  render() {
    return (
      <div className="App">
        <Contacts contacts={this.state.contacts} addContact={this.addContact} />
      </div>
    );
  }
}

export default App;
