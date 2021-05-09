import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";
import AddNote from "./components/AddNote/AddNote";

function App() {
  /*passing an array to each element */
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2021',
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
