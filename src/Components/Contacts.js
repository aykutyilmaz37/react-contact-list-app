import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Form from './Form';

import './List.css';

const Contacts = props =>
    <div className="Contacts">
        <List contacts={props.contacts} />
        <Form addContact={props.addContact} />
    </div>
Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func
}



export default Contacts;