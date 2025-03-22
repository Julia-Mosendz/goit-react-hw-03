import { nanoid } from "nanoid";
import * as Yup from "yup"
import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css"

const contactValidationScheme = Yup.object().shape({
  name: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
  number: Yup.string().required("Required")
})
function ContactForm (props) {
    return (
      <Formik initialValues={{name: "", number: ""}} validationSchema={contactValidationScheme} onSubmit={(values, actions) => {
        const contact = {...values, id: nanoid()}
        console.log (contact)
        props.onAddContact(contact)
        }}>
        <Form className={css.form}>
          <label>
            <span className={css.label}>Name</span>
            <Field className={css.field} type="text" name="name" />
          </label>
          <label>
            <span className={css.label}>Number</span>
            <Field className={css.field} type="tel" name="number" />
          </label>
          <button className={css.btn} type="submit">Add contact</button>
        </Form>
      </Formik>
    );
}

export default ContactForm