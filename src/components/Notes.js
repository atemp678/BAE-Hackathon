import React from "react";
import Note from "./Note";
export default function Notes({ noteData }) {
  return (
    <div>
      <h4>Conversations</h4>
      <ul className="note-list">
        {noteData.map((note, index) => (
          <Note noteData={noteData} key={index} />
        ))}
      </ul>
      <div className="addNewNote">
        <textarea></textarea>
        <button>Add Note</button>
      </div>
    </div>
  );
}
