import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./NotesSingle.css";

function NotesSingle({ id, text, date, handleDeleteNote }) {
  return (
    <div className="notes-single">
      <span>{text}</span>
      <div className="notes-footer">
        <small>{date}</small>
              <MdDeleteForever onClick={ ()=>handleDeleteNote(id)} className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}

export default NotesSingle;
