import React from "react";
import Card from "./Card";
import ViewContactSummary from "./ViewContactSummary";

export default function ViewContacts(props) {
  return (
    <Card>
      <div>
        <h3>Your Contacts</h3>
        <ul>
          {props.contacts.map((contact) => (
            <ViewContactSummary
              name={contact.name}
              date={contact.lastContactDate}
              key={contact.docRef}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
}
