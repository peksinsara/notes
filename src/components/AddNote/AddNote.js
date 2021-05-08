import React, { useState } from "react";
import "./AddNote.css";
import "../../App";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleContent = () => {
    handleAddNote(noteText);
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
        <small>200 Remaining</small>
        <button className="btn-save" onClick={handleContent}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
