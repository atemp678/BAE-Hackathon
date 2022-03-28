import "./App.css";
import { useEffect, useState } from "react";
import { getContacts } from "./firebase/firebaseConfig";
import ViewContacts from "./components/ViewContacts";
import ViewContact from "./components/ViewContact";
import AddNewContact from "./components/AddNewContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [viewedContact, setViewedContact] = useState(false);
  const [addContactView, setAddContactView] = useState(false);
  const [contactToggle, setContactToggle] = useState(false);
  useEffect(() => {
    async function getAllContacts() {
      setContacts(await getContacts());
    }
    getAllContacts();
  }, [contactToggle]);
  console.log("viewedContact: ", viewedContact);
  function viewSingleContact(docRef) {
    console.log(docRef);
    console.log("clicked!!");
    const viewContact = getSingleContact(docRef);
    setViewedContact(viewContact);
  }
  function getSingleContact(docRef) {
    const contact = contacts.find((contact) => contact.docRef === docRef);
    console.log(contact);
    return contact;
  }

  return (
    <div className="App">
      <AddNewContact toggleContact={setContactToggle} />
      <ViewContacts contacts={contacts} viewSingleContact={viewSingleContact} />
      {viewedContact && <ViewContact contact={viewedContact} />}
    </div>
  );
}

export default App;
