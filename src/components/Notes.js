import React from "react";
import Note from "./Note";
export default function Notes({ noteData }) {
  return (
    <div>
      <h4>Conversations</h4>
      <ul className="note-list">
        {noteData.length > 0 ? (
          noteData.map((note, index) => (
            <Note noteData={noteData} key={index} />
          ))
        ) : (
          <p>You haven't made any notes on this user.</p>
        )}
      </ul>
      <div className="addNewNote">
        <textarea></textarea>
        <button>Add Note</button>
      </div>
    </div>
  );
}
