import "./App.css";
import { getContacts } from "./firebase/firebaseConfig";
import AddNewContact from "./components/AddNewContact";
import * as moment from "moment";
import { useEffect } from "react";

function App() {
  let start = moment(new Date("2022-03-27"));
  let today = moment(new Date());
  let diff = parseInt(today.diff(start) / 86400000);
  console.log(diff);
  return (
    <div className="App">
      <AddNewContact />
    </div>
  );
}

export default App;
