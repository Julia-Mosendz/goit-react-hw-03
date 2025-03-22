import "the-new-css-reset/css/reset.css"
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    { id: "id-5", name: "Rose Dou", number: "227-91-26" },
  ]);

const [searchContact, setSearchContact] = useState("")
const addContact = (contact) => {setContacts((prevContacts) => {
  return [...prevContacts, contact];
})}
const visibleContacts = contacts.filter((contact) => {
  return contact.name.toLowerCase().includes(searchContact.toLowerCase())
})
console.log(visibleContacts);
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={searchContact} onSearchChange={setSearchContact} />
      <ContactList contacts={visibleContacts} />
    </>
  );
}

export default App;
