import React from "react";
import Form from "./Form";
import styles from "./Popup.module.css";

const EditForm = () => {
  return (
    <div className={`${styles["modal-container"]}  `}>
      <Form />
    </div>
  );
};

export default EditForm;
