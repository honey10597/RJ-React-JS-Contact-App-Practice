import "./App.css";

import React, { useEffect, useState } from "react";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetails from "./ContactDetails";

function App() {

  const LOCAL_STORAGE_KEY = "contacts"

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const retrieveContacts = localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : []
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
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddContact
                addContactHandler={addContactHandler}
              />}
          />
          <Route path={"/contact/:id"} element={<ContactDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
