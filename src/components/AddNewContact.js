import React, { useReducer } from "react";
import { addContact } from "../firebase/firebaseConfig.js";

function reducer(state, action) {
  switch (action.type) {
    case "change":
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
}

const AddNewContact = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    firstName: "",
    lastNameInitial: "",
    lastContact: "",
    notes: "",
  });

  return (
    <div>
      <form action="/action_page.php">
        <label htmlFor="first-name">First name:</label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          value={state.firstName}
          onChange={(e) =>
            dispatch({
              type: "change",
              value: e.target.value,
              key: e.target.name,
            })
          }
        ></input>
        <label htmlFor="last-name-initial">Last name Initial:</label>
        <input
          type="text"
          id="last-name-initial"
          name="lastNameInitial"
          value={state.lastNameInitial}
          onChange={(e) =>
            dispatch({
              type: "change",
              value: e.target.value,
              key: e.target.name,
            })
          }
        ></input>
        <label htmlFor="last-contact">Last Contact Date:</label>
        <input
          type="date"
          id="last-contact"
          name="lastContact"
          value={state.lastContact}
          onChange={(e) =>
            dispatch({
              type: "change",
              value: e.target.value,
              key: e.target.name,
            })
          }
        ></input>
      </form>
      <button onClick={() => addContact(state)}>Add Contact</button>
    </div>
  );
};

export default AddNewContact;
