import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './header';
import Addcontact from './addcontact';
import Contactlist from './contactlist';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <Addcontact addContactHandler={addContactHandler} />
      <Contactlist contacts={contacts} />
    </div>
  );
}

export default App;
