import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput";
import UserList from "./UserList";

class App extends Component {
  state = {
    users: [{ fname: "james", lname: "cook", username: "jcooking", games: 0 }]
  };
  saveUser = (user) => {
    console.log(user);
    this.setState((prevState) => ({
      users: [...prevState.users, user]
    }));
  };
  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">GameList</h1>
        </header>
        <main className="App-main">
          <h2>User Game List</h2>
          <div className="container">
            <UserInput users={users} saveUser={this.saveUser} />
            <UserList users={users} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
