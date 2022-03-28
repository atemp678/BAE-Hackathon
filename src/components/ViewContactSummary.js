import React from "react";

export default function ViewContactSummary({
  name,
  date,
  viewSingleContact,
  docRef,
}) {
  return (
    <li>
      <div onClick={() => viewSingleContact(docRef)}>{name}</div>
      <div>{date}</div>
    </li>
  );
}
