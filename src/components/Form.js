import React from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  return (
    <div className={styles["form-container"]}>
      <h2 className={styles.formTitle}>Fill in the form</h2>
      <form onSubmit={props.onSubmit} onChange={props.onChange}>
        {/* ${!isValid ? "invalid" : ""} */}
        <div className={styles["form-control"]}>
          <label htmlFor="firstName">First name</label>
          <input
            autoComplete="off"
            id="firstName"
            type="text"
            name="firstName"
            required
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="lastName">Last name</label>
          <input autoComplete="off" id="lastName" type="text" name="lastName" />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            autoComplete="off"
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            required
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
            required
          ></textarea>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="role">Role</label>
          <select name="role" id="role" required>
            <option value="" invalid="true" hidden>
              Choose your role
            </option>
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
