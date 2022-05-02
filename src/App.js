import React, { Component } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import NoteList from "./components/NoteList";
import Popup from "./components/Popup";
import View from "./components/View";

class App extends Component {
  state = {
    inputData: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      message: "",
      role: "",
    },
    showPopup: false,
  };

  handleInputChange = (e) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  closeHandler = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <div className={styles["App-top"]}>
          <Form
            onChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
          />
          <View {...this.state.inputData} />
          <div>
            {this.state.showPopup && (
              <Popup close={this.closeHandler} {...this.state.inputData} />
            )}
          </div>
        </div>
        <NoteList />
      </div>
    );
  }
}

export default App;
