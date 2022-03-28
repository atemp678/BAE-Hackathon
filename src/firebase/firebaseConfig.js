// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVu97hwCAP3qfdt25VxWoOhNSu01Ms73I",
  authDomain: "reach-out-dev-acf81.firebaseapp.com",
  projectId: "reach-out-dev-acf81",
  storageBucket: "reach-out-dev-acf81.appspot.com",
  messagingSenderId: "7690642081",
  appId: "1:7690642081:web:e97d67bca4b09a8c1546e0",
  measurementId: "G-6D36SQVFK3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getContacts = async () => {
  const querySnapshot = await getDocs(collection(db, "Contacts"));
  const contacts = [];
  querySnapshot.forEach((doc) => {
    contacts.push(doc.data());
  });
  return contacts;
};

// Add a new document with a generated id.
export const addContact = async (data) => {
  const docRef = await addDoc(collection(db, "Contacts"), data);
  const newData = { ...data, docRef: docRef.id };
  await updateContact(newData.docRef, newData);
  console.log("Document written with ID: ", docRef.id);
};

//Update a document
export const updateContact = async (docRef, data) => {
  await setDoc(doc(db, "Contacts", docRef), data);
};
