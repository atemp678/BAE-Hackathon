import React, { useReducer } from "react";

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
          placeholder="Joanne"
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
          placeholder="S"
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
          placeholder="2022-03-16"
          value={state.lastContact}
          onChange={(e) =>
            dispatch({
              type: "change",
              value: e.target.value,
              key: e.target.name,
            })
          }
        ></input>
        <label htmlFor="notes">Notes:</label>
        <input
          type="text"
          id="notes"
          name="notes"
          placeholder="Last time we spoke..."
          value={state.notes}
          onChange={(e) =>
            dispatch({
              type: "change",
              value: e.target.value,
              key: e.target.name,
            })
          }
        ></input>
      </form>
      <button>Add Contact</button>
    </div>
  );
};

export default AddNewContact;
