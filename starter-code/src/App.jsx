import React, { Component } from "react";
import contacts from "./contacts.json";

import "./App.css";

const contactsArray = contacts.slice(0, 4);
class App extends Component {
  constructor() {
    super();
    this.state = {
      person: contactsArray
    };
    this.add = this.add.bind(this);
  }

  add() {
    this.setState({
      person: {
        ...this.state.person,
        person: contactsArray.push(
          contacts[Math.floor(Math.random() * Math.floor(contacts.length))]
        )
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.add}>Add Random Person</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contactsArray.map(contact => (
            <tr>
              <td>
                <img src={contact.pictureUrl} alt="" />
              </td>
              <td>
                <p>{contact.name}</p>
              </td>
              <td>
                <p>{contact.popularity}</p>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
