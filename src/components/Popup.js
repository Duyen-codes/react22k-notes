import React from "react";
import styles from "./Popup.module.css";

const Popup = (props) => {
  return (
    <div className={`${styles["modal-container"]}  `}>
      <div className={styles["modal-content"]}>
        <button className={styles["close-btn"]} onClick={props.onClick}>
          X
        </button>
        <h2>Your note:</h2>
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
        <button onClick={props.onClick} className={styles["yes-btn"]}>
          Yes, I am sure
        </button>
        <button onClick={props.onClick} className={styles["no-btn"]}>
          Nope, don't want to post it
        </button>
      </div>
    </div>
  );
};

export default Popup;
