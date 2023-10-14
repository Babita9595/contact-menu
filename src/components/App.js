import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import {v4 as uuidv4} from 'uuid'


function App() {

  const [contacts, setContact] = useState([])
  const LOCAL_STORAGE_KEY = 'contact'
  // const contact = [
  //   {
  //     id:'1',
  //     "name":"yogesh",
  //     "email":'yogesh@gmail.com'
  //   },
  //   {
  //     id:'2',
  //     "name":"gopesh",
  //     "email":'gopesh@gmail.com'
  //   }
  // ]


  //data coming from child component to parent component
  const addcontacthandler =(contact)=>{
    setContact([...contacts, {id:uuidv4(), ...contact}])
  }

  const removeContactHandler=(id)=>{
//copy of contact then filter then delete

const newContactList = contacts.filter((contact)=>
{
  return contacts.id !== id;
})
setContact(newContactList)
  }

  //set data into local storage
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])


  //get data from local storage
  useEffect(()=>{
    const retrievedata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(retrievedata) setContact(retrievedata);
  
  },[])

  return (
    <div className='ui container' >
      <Header/>
      <AddContact addcontacthandler={addcontacthandler}/>
      <ContactList contacts={contacts}  getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
