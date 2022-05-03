import React from "react";
import Form from "./Form";
import styles from "./Popup.module.css";

const EditForm = (props) => {
  console.log("editform props", props);
  return (
    <div className={`${styles["modal-container"]}`}>
      <button className={styles["close-btn"]} onClick={props.close}>
        X
      </button>
      <Form {...props} />
    </div>
  );
};

export default EditForm;
