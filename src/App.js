import "./App.css";
import { useEffect, useState } from "react";
import { getContacts } from "./firebase/firebaseConfig";
import ViewContacts from "./components/ViewContacts";
import ViewContact from "./components/ViewContact";
import AddNewContact from "./components/AddNewContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [viewedContact, setViewedContact] = useState(false);
  const [addContactView, setAddContactView] = useState(true);
  useEffect(() => {
    async function getAllContacts() {
      setContacts(await getContacts());
    }
    getAllContacts();
  }, []);
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
      {!addContactView && contacts.length > 0 && !viewedContact && (
        <ViewContacts
          contacts={contacts}
          viewSingleContact={viewSingleContact}
        />
      )}
      {viewedContact && <ViewContact contact={viewedContact} />}
      {addContactView && <AddNewContact />}
    </div>
  );
}

export default App;
