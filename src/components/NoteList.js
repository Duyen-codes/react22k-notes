import React from "react";
import styles from "./NoteList.module.css";

const NoteList = (props) => {
  return (
    <div className={styles["notelist-wrapper"]}>
      <h2>NoteList:</h2>
      {!props.notes && <p>Loading...</p>}
      {props.notes && (
        <ol>
          {props.notes.map((item) => (
            <li key={item.id}>
              {item.firstname} | {item.lastname} | {item.phonenumber} |{" "}
              {item.role} | {item.message}
              <button onClick={() => props.delete(item.id)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
              <button onClick={() => props.edit(item)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default NoteList;
