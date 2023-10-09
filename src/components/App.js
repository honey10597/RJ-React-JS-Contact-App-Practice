import "./App.css";

import React, { useEffect, useState } from "react";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {

  const LOCAL_STORAGE_KEY = "contacts"

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(retrieveContacts, "retrieveContacts");
    if (retrieveContacts) setContacts(retrieveContacts)
  }, [])

  useEffect(() => {
    if (contacts.length)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: String(Math.random()), ...contact }])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contacts) => {
      return contacts.id !== id
    })
    setContacts(newContactList)
  }

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
