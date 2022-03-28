import logo from "./logo.svg";
import "./App.css";
import getContacts from "./firebase/firebaseConfig";



function App() {

  getContacts();

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
