import React from "react";
import Card from "./Card";
import Notes from "./Notes";
export default function ViewContact(props) {
  return (
    <Card>
      <h2>
        {props.name} {props.surname}
      </h2>
      <p>
        Contact number: <span>{props.contact}</span>
      </p>
      <p>
        Last contact made on: <span>{props.lastContactDate}</span>
      </p>
    </Card>
  );
}
