import css from "./Contact.module.css"

function Contact (props) {
    console.log (props)
    return (
<>
<p>{props.contact.name}</p>
<p>{props.contact.phoneNumber}</p>
<button type="button">Delete</button>
</>
    )
}

export default Contact
