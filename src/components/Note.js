import React from "react";

export default function Note({ noteData }) {
  return (
    <li>
      <div className="note-container">
        <div className="note-contact">
          <p>{noteData.note}</p>
        </div>
        <div className="note-date">
          <p>{noteData.date}</p>
        </div>
      </div>
    </li>
  );
}
