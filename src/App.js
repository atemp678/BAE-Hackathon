import "./App.css";
import { useEffect, useState } from "react";
import { getContacts } from "./firebase/firebaseConfig";
import AddNewContact from "./components/AddNewContact";

function App() {
  const [contacts, setContacts] = useState(false);
  useEffect(() => {
    setContacts(getContacts());
  }, []);

  return (
    <div className="App">
      <AddNewContact />
    </div>
  );
}

export default App;
