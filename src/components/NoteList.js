import React, { Component } from "react";
import styles from "./NoteList.module.css";
import axios from "axios";

class NoteList extends Component {
  state = { data: [] };
  componentDidMount() {
    axios.get("http://localhost:3010/notes").then((response) => {
      console.log(response.data);
      this.setState({ data: response.data });
    });
  }
  render() {
    const notelist = this.state.data.map((item) => <li>{item}</li>);
    return (
      <div className={styles["notelist-wrapper"]}>
        <h2>NoteList:</h2>
        <ol>
          {this.state.data.map((item) => (
            <li>
              {item.firstname} {item.lastname} | {item.phone} | {item.role} |{" "}
              {item.message}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default NoteList;
