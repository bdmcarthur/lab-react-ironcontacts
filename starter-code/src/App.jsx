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
    this.sortName = this.sortName.bind(this);
    this.sortPop = this.sortPop.bind(this);
    // this.delete = this.delete.bind(this);
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

  sortName() {
    this.setState({
      person: {
        ...this.state.person,
        person: contactsArray.sort((a, b) => (a.name > b.name ? 1 : -1))
      }
    });
  }

  sortPop() {
    this.setState({
      person: {
        ...this.state.person,
        person: contactsArray.sort((a, b) =>
          a.popularity > b.popularity ? 1 : -1
        )
      }
    });
  }

  // delete() {
  //   this.setState({
  //     person: {
  //       ...this.state.person,
  //       person: contactsArray.splice(3, 1)
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <button onClick={this.add}>Add Random Person</button>
        <button onClick={this.sortName}>Sort By Name</button>
        <button onClick={this.sortPop}>Sort By Popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
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
              <td>
                <button onClick={this.delete}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
