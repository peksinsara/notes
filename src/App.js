import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";

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

  return (
    <div className="app">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
