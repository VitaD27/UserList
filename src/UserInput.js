import React, { Component } from "react";

class UserInput extends Component {
  state = {
    fname: "",
    lname: "",
    username: "",
    games: 0,
    unique: true
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
      unique: true
    });
  };
  fieldsAreValid = (e) => {
    const { fname, lname, username } = this.state;
    const valid = fname.length > 0 && lname.length > 0 && username.length > 0;
    return valid;
  };
  addUser = (e) => {
    e.preventDefault();
    console.log(this.props.users);
    console.log(this.state.username);
    if (
      this.props.users.filter((user) => user.username === this.state.username)
        .length > 0
    ) {
      console.log("already taken");
      this.setState({ unique: false });
    } else {
      this.setState({ unique: true });
      this.props.saveUser({ ...this.state });
    }
  };
  render() {
    const { fname, lname, username } = this.state;
    return (
      <div>
        <h3>Přidat uživatele</h3>

        <form onSubmit={this.addUser}>
          <label>
            Jméno:
            <input
              name="fname"
              type="text"
              value={fname}
              onChange={this.handleChange}
              className="form-element"
            />
          </label>
          <br />
          <label>
            Přijmení:
            <input
              name="lname"
              type="text"
              value={lname}
              onChange={this.handleChange}
              className="form-element"
            />
          </label>
          <br />
          <label>
            Uživatelské Jméno:
            <input
              name="username"
              type="text"
              value={username}
              onChange={this.handleChange}
              required
              className={
                !this.state.unique ? "form-element error" : "form-element"
              }
            />
            {!this.state.unique && (
              <span className="red">Username must be unique!</span>
            )}
          </label>
          <br />
          <button disabled={!this.fieldsAreValid()}>Přidat</button>
        </form>
      </div>
    );
  }
}

export default UserInput;
