import React, { Component } from "react";
import FormComponent from "./FormComponent";

class Form extends Component {
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
    return <FormComponent handlechange={this.change} data={this.state} />;
  }
}
export default Form;
