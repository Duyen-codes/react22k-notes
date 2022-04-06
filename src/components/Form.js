import React from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  return (
    <div className={styles["form-container"]}>
      <h2 className={styles.formTitle}>Fill in the form</h2>
      <form>
        {/* ${!isValid ? "invalid" : ""} */}
        <div className={styles["form-control"]}>
          <label htmlFor="firstName">First name</label>
          <input
            autoComplete="off"
            id="firstName"
            type="text"
            name="firstName"
            onChange={props.onChange}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="lastName">Last name</label>
          <input
            autoComplete="off"
            id="lastName"
            type="text"
            name="lastName"
            onChange={props.onChange}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            autoComplete="off"
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            onChange={props.onChange}
          />
        </div>
        <div className={styles["form-control"]}>
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
        <div className={styles["form-control"]}>
          <label htmlFor="role">Role</label>
          <select name="role" id="role" onChange={props.onChange}>
            <option value="">Choose your role</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="button" onClick={props.onSubmit}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
