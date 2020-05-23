import React, { Component } from "react";
import Note from "./Note";
class Exp1 extends Component {
  constructor() {
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
    this.change = this.change.bind(this);
  }
  change(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }
  render() {
    return (
      <main>
        <form>
          <Note changer={this.change} />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.change}
            />
            Male
          </label>
          <br />
          <label>
            {" "}
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.change}
            />
            Female
          </label>
          <br />
          <select
            value={this.state.destination}
            name="destination"
            onChange={this.change}
          >
            <option value="">--Select Your Destianation--</option>
            <option value="germany">Germany</option>
            <option value="spain">Spain</option>
            <option value="norway">norway</option>
            <option value="finland">Finland</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              name="vegan"
              value={this.state.value}
              checked={this.state.vegan}
              onChange={this.change}
            />
            vegan?
          </label>
          <label>
            <input
              type="checkbox"
              name="kosher"
              value={this.state.value}
              checked={this.state.kosher}
              onChange={this.change}
            />
            Kosher?
          </label>
          <label>
            <input
              type="checkbox"
              name="lacto"
              value={this.state.value}
              checked={this.state.lacto}
              onChange={this.change}
            />
            Lacto free?
          </label>
        </form>
        <hr />
        <p>
          your name is:{this.state.firstname} {this.state.lastname}
        </p>
        <p>your age is:{this.state.age}</p>
        <p>your gender is:{this.state.gender}</p>
        <p>your destination is:{this.state.destination}</p>
        <p>your VEGAN?:{this.state.vegan ? "yes" : "no"}</p>
        <p>your KOSHER?:{this.state.kosher ? "yes" : "no"}</p>
        <p>your lacto free?:{this.state.lacto ? "yes" : "no"}</p>
      </main>
    );
  }
}
export default Exp1;
