import React from "react";
import styles from "./NoteList.module.css";

const NoteList = (props) => {
  return (
    <div className={styles["notelist-wrapper"]}>
      <h2>NoteList:</h2>
      {!props && <p>Loading...</p>}
      {props && (
        <ol>
          {props.notes.map((item) => (
            <li key={item.id}>
              {item.firstname} {item.lastname} | {item.phonenumber} |{" "}
              {item.role} | {item.message}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default NoteList;
