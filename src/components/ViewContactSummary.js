import React from "react";

export default function ViewContactSummary({ name, date }) {
  return (
    <li>
      <div>{name}</div>
      <div>{date}</div>
    </li>
  );
}
