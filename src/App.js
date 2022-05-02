import React, { Component } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import NoteList from "./components/NoteList";
import Popup from "./components/Popup";
import View from "./components/View";
import axios from "axios";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      message: "",
      role: "",
    },
    showPopup: false,
    notes: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3010/notes").then((response) => {
      this.setState({ notes: response.data });
    });
  }

  handleInputChange = (e) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [e.target.name]: e.target.value,
      },
    });
  };
  handlePopup = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  handleSubmit = () => {
    axios
      .post("http://localhost:3010/notes", { ...this.state.inputData })
      .then((res) => {
        this.setState({
          notes: [...this.state.notes, res.data],
          showPopup: !this.state.showPopup,
        });
      })
      .catch((error) => console.log(error));
  };

  closeHandler = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <div className={styles["App-top"]}>
          <Form onChange={this.handleInputChange} onSubmit={this.handlePopup} />
          <View {...this.state.inputData} />
          <div>
            {this.state.showPopup && (
              <Popup
                close={this.closeHandler}
                post={this.handleSubmit}
                {...this.state.inputData}
              />
            )}
          </div>
        </div>
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
