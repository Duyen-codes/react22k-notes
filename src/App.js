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
    this.setState({ showPopup: true });
  };

  render() {
    return (
      <div className={styles.App}>
        <Form
          onChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
        />
        <View
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          role={this.state.role}
          message={this.state.message}
        />
        <div>
          {this.state.showPopup ? (
            <Popup
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              phoneNumber={this.state.phoneNumber}
              role={this.state.role}
              message={this.state.message}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
