import React from "react";
import AddNote from "./components/AddNote/AddNote";
import NotesSingle from "./components/NotesSingle";
import "./NotesList.css";

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notes-page">
      {/*for each component render the note */}
      {notes.map((notes) => (
        <NotesSingle id={notes.id} text={notes.text} date={notes.date} handleDeleteNote={ handleDeleteNote}/>
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
