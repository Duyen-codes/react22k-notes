import React, { Component } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import Popup from "./components/Popup";
import View from "./components/View";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
    role: "",
    showPopup: false,
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    this.setState({ showPopup: !this.state.showPopup });
  };

  render() {
    return (
      <div className={styles.App}>
        <Form
          onChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
          onClick={this.toggleModal}
        />
        <View
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          role={this.state.role}
          message={this.state.message}
        />
        {this.state.showPopup ? <Popup toggle={this.handleFormSubmit} /> : null}
      </div>
    );
  }
}

export default App;
