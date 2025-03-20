import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css"

function ContactForm () {
    return (
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <label>
            <span>Name</span>
            <Field type="text" name="name" />
          </label>
          <label>
            <span>Number</span>
            <Field type="tel" name="phone" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
}

export default ContactForm