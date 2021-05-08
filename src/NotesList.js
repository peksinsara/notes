import React from "react";
import AddNote from "./components/AddNote/AddNote";
import NotesSingle from "./components/NotesSingle";
import "./NotesList.css";

function NotesList({ notes, handleAddNote }) {
  return (
    <div className="notes-page">
      {/*for each component render the note */}
      {notes.map((notes) => (
        <NotesSingle id={notes.id} text={notes.text} date={notes.text} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
