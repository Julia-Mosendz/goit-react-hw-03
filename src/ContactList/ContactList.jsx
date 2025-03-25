import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList(props) {
  return (
    <ul className={css.list}>
      {props.contacts.map((contact) => {
        return (
          <Contact
            contact={contact}
            key={contact.id}
            onDeleteContact={props.onDeleteContact}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;
