import React from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  return (
    <div className={styles["form-container"]}>
      <h2 className={styles.formTitle}>Fill in the form</h2>
      <form onSubmit={props.onSubmit} onChange={props.onChange}>
        <div className={styles["form-control"]}>
          <label htmlFor="firstname">First name</label>
          <input
            autoComplete="off"
            id="firstname"
            type="text"
            name="firstname"
            required
            defaultValue={props.firstname}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="lastname">Last name</label>
          <input autoComplete="off" id="lastname" type="text" name="lastname" />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="phonenumber">Phone number</label>
          <input
            autoComplete="off"
            id="phonenumber"
            type="text"
            name="phonenumber"
            required
            defaultValue={props.firstname}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="message">Message</label>
          <textarea
            autoComplete="off"
            name="message"
            id="message"
            cols="20"
            rows="5"
            required
            defaultValue={props.message}
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

        <button type="submit" onClick={props.onSubmit}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
