import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import NoteList from "./components/NoteList";
import Popup from "./components/Popup";
import View from "./components/View";
import axios from "axios";
import EditForm from "./components/EditForm";

const App = () => {
  const [inputData, setInputData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
  });
  const [showPopup, setShowPopup] =
    useState(false); /* hide/show overlay when submit form */
  const [updatePopup, setUpdatePopup] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({});

  useEffect(() => {
    /* fetch data from JSON server using axios get inside useEffect = componentDidMount */
    axios.get("http://localhost:3010/notes").then((response) => {
      setNotes(response.data);
    });
  }, []); /* */

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  // hide/show popup window
  const handlePopup = (e) => {
    e.preventDefault();
    setShowPopup(!showPopup);
  };

  // reload page when closing popup
  const closeHandler = () => {
    window.location.reload();
  };

  // when users confirm 'yes, I'm sure'

  const handleSubmit = () => {
    console.log("handle submit clicked");
    // post input data to server
    axios
      .post("http://localhost:3010/notes", inputData)
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

  const handleDelete = (id) => {
    console.log("from handleDelete: ", id);
    axios.delete(`http://localhost:3010/notes/${id}`).then((res) => {
      const filteredNotes = notes.filter((item) => item.id !== id);
      console.log(filteredNotes);
      setNotes(filteredNotes);
    });
  };

  // handle when user clicks 'Edit' button

  const handleShowEditForm = (item) => {
    setUpdatePopup(true);
    setCurrentNote(item);
  };

  // handle input change in EditForm.js

  const inputUpdateHandler = (e) => {
    setCurrentNote({ ...currentNote, [e.target.name]: e.target.value });
  };

  // update data in json server using put method

  const putToServerHandler = (id) => {
    axios
      .put(`http://localhost:3010/notes/${id}`, currentNote)
      .then((res) => res.data);
  };

  return (
    <div>
      <div className={styles["App-top"]}>
        <Form change={handleInputChange} submit={handlePopup} />
        <View {...inputData} />
        <div>
          {showPopup && (
            <Popup close={closeHandler} post={handleSubmit} {...inputData} />
          )}
        </div>
        <div>
          {updatePopup && (
            <EditForm
              {...currentNote}
              close={closeHandler}
              currentNote={currentNote}
              change={inputUpdateHandler}
              submit={() => putToServerHandler(currentNote.id)}
            />
          )}
        </div>
      </div>
      <NoteList notes={notes} delete={handleDelete} edit={handleShowEditForm} />
    </div>
  );
};

export default App;
