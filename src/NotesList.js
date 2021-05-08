import React from "react";
import NotesSingle from "./components/NotesSingle";
import "./NotesList.css";

function NotesList({ notes }) {
  return (
    <div className="notes-page">
      {/*for each component render the note */}
          {notes.map((notes) => (
              <NotesSingle id={notes.id} text={notes.text} date={notes.text} />
      ))}
    </div>
  );
}

export default NotesList;
