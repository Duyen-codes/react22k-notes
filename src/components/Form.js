import React from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  return (
    <div>
      <h2>Fill in the form</h2>
      <form>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            autoComplete="off"
            id="firstName"
            type="text"
            name="firstName"
            onChange={props.onChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            autoComplete="off"
            id="lastName"
            type="text"
            name="lastName"
            onChange={props.onChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            autoComplete="off"
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            onChange={props.onChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            autoComplete="off"
            name="message"
            id="mesage"
            cols="20"
            rows="5"
            onChange={props.onChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select name="role" id="role" onChange={props.onChange}>
            <option value="">Choose your role</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="button" onClick={props.toggle}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
