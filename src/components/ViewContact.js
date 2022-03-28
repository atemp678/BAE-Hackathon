import React from "react";
import Card from "./Card";
import Notes from "./Notes";
export default function ViewContact({ contact }) {
  return (
    <Card>
      <h2>
        {contact.Name} {contact.SurnameInitial}
      </h2>
      <p>
        Contact number: <span>{contact.Contact}</span>
      </p>
      <p>
        Last contact made on: <span>{contact.lastContactDate}</span>
      </p>
      <Notes noteData={contact.notes ? contact.notes : []} />}
    </Card>
  );
}
