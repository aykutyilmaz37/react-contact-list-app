import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired
    }
    state={
        filterText:''
    }
    onChangeFilterText = (e) =>{
        this.setState({
            filterText:e.target.value
        })
    }
    render() {
        const filteredContacts = this.props.contacts.filter(
            contact =>{
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLocaleLowerCase()
                ) !== -1
            }
        )
        return (
            <div className="List">
                <input name="filter" id="filter" value={this.state.filterText} onChange={this.onChangeFilterText} placeholder="Filter by name or phone" />
                <ul className="listArea">
                    {
                        filteredContacts.map((contact, key) =>
                            <li key={key}>
                                <span className="name">{contact.name}</span>
                                <span className="phone">{contact.phone}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default List;