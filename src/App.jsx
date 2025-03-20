import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const contacts = [
  { contactId: 1, name: "Poly", phoneNumber: "064412315" },
  { contactId: 2, name: "Kiwi", phoneNumber: "064412316" },
  { contactId: 3, name: "Ajaks", phoneNumber: "064412317" },
];

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts}/>
    </>
  );
}

export default App;
