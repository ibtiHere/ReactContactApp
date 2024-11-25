import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './header';
import Addcontact from './addcontact';
import Contactlist from './contactlist';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // Add contact handler
  const addContactHandler = (contact) => {
    const updatedContacts = [...contacts, { id: Date.now(), ...contact }];
    setContacts(updatedContacts);
  };

  // Delete contact handler
  const deleteContactHandler = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  // Load contacts from localStorage on initial render
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  // Save contacts to localStorage whenever they change
  useEffect(() => {
    if (contacts.length > 0) { // Save only if contacts is not empty
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <Addcontact addContactHandler={addContactHandler} />
      <Contactlist contacts={contacts} deleteContactHandler={deleteContactHandler} />
    </div>
  );
}

export default App;
