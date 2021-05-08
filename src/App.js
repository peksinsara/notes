import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";
import AddNote from "./components/AddNote/AddNote";

function App() {
  /*passing an array to each element */
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Testig one",
      date: "17.03.2021",
    },
    {
      id: nanoid(),
      text: "Testig second",
      date: "17.03.2021",
    },
    {
      id: nanoid(),
      text: "Testig third",
      date: "17.03.2021",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    /*adding note to the end of the array */
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="app">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
