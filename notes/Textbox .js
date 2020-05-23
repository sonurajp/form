import React, { Component } from "react";
class Textbox extends Component {
  constructor(changer) {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
      destination: "",
      vegan: false,
      kosher: false,
      lacto: false
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="firstname"
          value={this.state.firstname}
          onChange={changer}
          placeholder="First name"
        />
        <br />
        <input
          type="text"
          name="lastname"
          value={this.state.lastname}
          placeholder="Last name"
        />
        <br />
        <input
          type="text"
          name="age"
          value={this.state.age}
          placeholder="Age"
        />
      </div>
    );
  }
}

export default Textbox;
