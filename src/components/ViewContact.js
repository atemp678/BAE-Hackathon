import React from "react";
import Card from "./Card";
import Notes from "./Notes";
export default function ViewContact({ contact }) {
  return (
    <Card>
      <h2>
        {contact.firstName} {contact.lastNameInitial}
      </h2>
      <p>
        Contact number: <span>{contact.contact}</span>
      </p>
      <p>
        Last contact made on: <span>{contact.lastContact}</span>
      </p>
      <Notes noteData={contact.notes ? contact.notes : []} />
    </Card>
  );
}
