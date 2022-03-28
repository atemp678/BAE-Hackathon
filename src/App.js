import "./App.css";
import { getContacts } from "./firebase/firebaseConfig";
import AddNewContact from "./components/AddNewContact";

function App() {
  getContacts();

  return (
    <div className="App">
      <AddNewContact />
    </div>
  );
}

export default App;
