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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  render() {
    return (
      <div className={styles.App}>
        <Form onChange={this.handleInputChange} onSubmit={this.handleSubmit} />
        <View
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          role={this.state.role}
          message={this.state.message}
        />
        <div>
          {this.state.showPopup ? (
            <Popup onClick={this.handleSubmit} {...this.state} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
