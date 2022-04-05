import React from "react";
import styles from "./View.module.css";

const View = (props) => {
  return (
    <div className={styles["view-container"]}>
      <h2>This is your input:</h2>
      <div className={styles["view-content"]}>
        <div>
          <span>First name: </span>
          <span>{props.firstName}</span>
        </div>
        <div>
          <span>Last name: </span>
          <span>{props.lastName}</span>
        </div>
        <div>
          <span>Phone number: </span>
          <span>{props.phoneNumber}</span>
        </div>

        <div>
          <span>Message: </span>
          <span>{props.message}</span>
        </div>
        <div>
          <span>Role: </span>
          <span>{props.role}</span>
        </div>
      </div>
    </div>
  );
};

export default View;
