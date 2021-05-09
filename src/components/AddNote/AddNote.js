import React, { useState } from "react";
import "./AddNote.css";
import "../../App";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 300;

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleContent = () => {
    /*check if there is text in the textarea*/
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      alert("Successfuly added !");
      setNoteText("");
    } else {
      alert("Input a value !");
    }
  };

  return (
    <div className="add-note">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
          <div className="note-footer">
              {/*remaining characters*/}
              <small>{ characterLimit-noteText.length}</small>
        <button className="btn-save" onClick={handleContent}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
