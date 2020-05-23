import React from "react";
function FormComponent(props) {
  return (
    <div>
      <main>
        <form>
          <input
            type="text"
            name="firstname"
            value={props.data.firstname}
            onChange={props.handlechange}
            placeholder="First name"
          />
          <br />
          <input
            type="text"
            name="lastname"
            value={props.data.lastname}
            onChange={props.handlechange}
            placeholder="Last name"
          />
          <br />
          <input
            type="text"
            name="age"
            value={props.data.age}
            onChange={props.handlechange}
            placeholder="Age"
          />
          <br />
          <input
            type="text"
            name="age"
            value={props.data.age}
            onChange={props.handlechange}
            placeholder="Age"
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={props.data.gender === "male"}
              onChange={props.handlechange}
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
              checked={props.data.gender === "Female"}
              onChange={props.handlechange}
            />
            Female
          </label>
          <br />
          <select
            value={props.data.destination}
            name="destination"
            onChange={props.handlechange}
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
              value={props.data.value}
              checked={props.data.vegan}
              onChange={props.handlechange}
            />
            vegan?
          </label>
          <label>
            <input
              type="checkbox"
              name="kosher"
              value={props.data.value}
              checked={props.data.kosher}
              onChange={props.handlechange}
            />
            Kosher?
          </label>
          <label>
            <input
              type="checkbox"
              name="lacto"
              value={props.data.value}
              checked={props.data.lacto}
              onChange={props.handlechange}
            />
            Lacto free?
          </label>
        </form>
        <hr />
        <p>
          your name is:{props.data.firstname} {props.data.lastname}
        </p>
        <p>your age is:{props.data.age}</p>
        <p>your gender is:{props.data.gender}</p>
        <p>your destination is:{props.data.destination}</p>
        <p>your VEGAN?:{props.data.vegan ? "yes" : "no"}</p>
        <p>your KOSHER?:{props.data.kosher ? "yes" : "no"}</p>
        <p>your lacto free?:{props.data.lacto ? "yes" : "no"}</p>
      </main>
    </div>
  );
}
export default FormComponent;
