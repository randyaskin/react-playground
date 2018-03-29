import React, { Component } from 'react';
import './ContactList.css';

class ContactList extends Component {
  render() {
    return (
      <ul className="contactList">
        {this.props.contacts.map(contact => {
          return (
            <li key={contact.id} className="contact">
              <img className="contact__avatar" src="http://via.placeholder.com/50x50" alt="avatar"/>
              <div>
                {contact.first} {contact.last}<br/>
                <a href={"tel:" + contact.tel}>{contact.tel}</a>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.defaultProps = {
  contacts: [
    {
      "id": 0,
      "first": "Pete",
      "last": "Smith",
      "tel": "+1-555-555-5555"
    },
    {
      "id": 1,
      "first": "Sarah",
      "last": "Jones",
      "tel": "+1-555-666-5555"
    },
    {
      "id": 2,
      "first": "Maria",
      "last": "Espinosa",
      "tel": "+1-555-666-1111"
    },
    {
      "id": 3,
      "first": "Srinivasan",
      "last": "Singh",
      "tel": "+1-555-111-5555"
    },
    {
      "id": 4,
      "first": "Luigi",
      "last": "Rossi",
      "tel": "+1-555-444-5555"
    }
  ]
}

export default ContactList;