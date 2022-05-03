import React, { Component } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import NoteList from "./components/NoteList";
import Popup from "./components/Popup";
import View from "./components/View";
import axios from "axios";
import EditForm from "./components/EditForm";

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
    showEditForm: false,
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

  // hide/show popup window
  handlePopup = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  // reload page when closing popup
  closeHandler = () => {
    window.location.reload();
  };

  // when users confirm 'yes'
  handleSubmit = () => {
    console.log("handle submit clicked");
    // post input data to server
    axios
      .post("http://localhost:3010/notes", this.state.inputData)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })

      .catch((error) => console.log(error));
    // axios
    //   .post(
    //     "http://localhost:3010/notes",
    //     this.state.inputData
    //   ) /* {...this.state.inputData} works too but no need since inputData is already an object so spread operator is not needed */
    //   .then((res) => {
    //     this.setState({
    //       notes: [...this.state.notes, res.data],
    //       showPopup: !this.state.showPopup,
    //     });
    //     console.log("res", res);
    //   })
    //   .catch((error) => console.log(error));
    // this.closeHandler();
  };

  handleDelete = (id) => {
    axios.delete(`http://localhost:3010/notes/${id}`).then((res) => {
      const notes = this.state.notes.filter((item) => item.id !== id);
      this.setState({ notes: notes });
    });
  };

  handleEdit = (id) => {
    console.log("handle edit", "item id:", id);
    this.setState({ showEditForm: !this.state.showEditForm });
  };

  updateHandler = (item) => {
    this.setState({ currentNote: item, showEditForm: true });
  };

  inputUpdateHandler = (e) => {
    this.setState({
      currentNote: {
        ...this.state.currentNote,
        [e.target.name]: e.target.value,
      },
    });
  };

  postHandler = (id) => {
    axios.put(`http://localhost:3010/notes/${id}`, this.state.currentNote);
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
          <div>
            {this.state.showEditForm && <EditForm close={this.closeHandler} />}
          </div>
        </div>
        <NoteList
          notes={this.state.notes}
          delete={this.handleDelete}
          edit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
