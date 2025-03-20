import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList(props) {
  return (
    <ul>
      {props.contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
