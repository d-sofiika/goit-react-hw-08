import { Formik, Field, Form } from "formik";
import { useId } from 'react';

const LogInForm = ({submit}) => {

  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    console.log('values', values)
    submit(values)
    actions.resetForm()
  }
  return (
    <Formik initialValues={{  email: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="emailId">Email:</label>
        <Field name="email" id={emailId} />
        <label htmlFor="passwordId">Password:</label>
        <Field name="password" type="password" id={passwordId} />
        <button type="submit">LogIn</button>
      </Form>
      
    </Formik>
  );
};

export default LogInForm;
