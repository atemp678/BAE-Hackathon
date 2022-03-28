import React from "react";
import Card from "./Card";
import ViewContactSummary from "./ViewContactSummary";

export default function ViewContacts(props) {
  console.log("Props contacts: ", props.contacts);
  return (
    <Card>
      <div>
        <h3>Your Contacts</h3>
        <ul>
          {props.contacts.map((contact) => (
            <ViewContactSummary
              name={contact.firstName}
              date={contact.lastContact}
              docRef={contact.docRef}
              viewSingleContact={props.viewSingleContact}
              key={contact.docRef}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
}
