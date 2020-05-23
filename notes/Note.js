import React, { Component } from "react";
class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      age: ""
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="firstname"
          value={this.state.firstname}
          onChange={this.props.changer}
          placeholder="First name"
        />
        <br />
        <input
          type="text"
          name="lastname"
          value={this.state.lastname}
          onChange={this.props.changer}
          placeholder="Last name"
        />
        <br />
        <input
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.props.changer}
          placeholder="Age"
        />
        <br />
      </div>
    );
  }
}

export default Note;
