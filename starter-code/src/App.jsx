import React, { Component } from "react";
import contacts from "./contacts.json";

import "./App.css";

const contactsArray = contacts.slice(0, 4);

class App extends Component {
  render() {
    return (
      <div>
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
