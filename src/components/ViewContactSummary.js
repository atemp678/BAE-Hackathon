import React from "react";
import * as moment from "moment";

export default function ViewContactSummary({
  name,
  date,
  viewSingleContact,
  docRef,
}) {
  let lastContact = moment(new Date(date));
  let today = moment(new Date());
  let diff = parseInt(today.diff(lastContact) / 86400000);

  return (
    <li>
      <div onClick={() => viewSingleContact(docRef)}>{name}</div>
      <div>
        You spoke to {name} {diff} days ago.
      </div>
    </li>
  );
}
