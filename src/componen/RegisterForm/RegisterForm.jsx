import { Formik, Field, Form } from "formik";
import { useId } from 'react';

const RegisterForm = ({submit}) => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    console.log('values', values)
    submit(values)
    actions.resetForm()
  }
  return (
    <Formik initialValues={{ name: "", email: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="nameId">Name:</label>
        <Field name="name" id={nameId} />
        <label htmlFor="emailId">Email:</label>
        <Field name="email" id={emailId} />
        <label htmlFor="passwordId">Password:</label>
        <Field name="password" type="password" id={passwordId} />
        <button type="submit">Register</button>
      </Form>
      
    </Formik>
  );
};

export default RegisterForm;
