import React, { Component } from "react";
import User from "./User";
import GameToggle from "./GameToggle";

class UserList extends Component {
  state = {
    hide: false
  };
  toggleGames = () => {
    console.log(this.state.hide);
    this.setState((prevState) => ({
      hide: !prevState.hide
    }));
  };
  render() {
    const { users } = this.props;
    const { hide } = this.state;
    return (
      <div>
        <h3>Uživatelé</h3>
        {users.length > 0 && (
          <table>
            <thead>
              <tr>
                <td>Jméno</td>
                <td>Přijmení</td>
                <td>Uživatel</td>
                <td>Hry</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <User key={user.username} user={user} hide={hide} />
              ))}
            </tbody>
          </table>
        )}
        <GameToggle toggleGames={this.toggleGames} hide={hide} />
      </div>
    );
  }
}

export default UserList;
