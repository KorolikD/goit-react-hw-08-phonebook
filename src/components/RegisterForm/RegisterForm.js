import { useDispatch } from 'react-redux';
import { registration } from '../../redux/auth/operations';

import { Field, Form, FormGroup, SubmitButton } from './RegisterForm.styled';
import { Formik } from 'formik';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ userName, email, password }, actions) => {
    const newContact = {
      name: userName,
      email: email,
      password: password,
    };
    dispatch(registration(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        userName: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup htmlFor="userName">
          User Name:
          <Field name="userName" placeholder="Adrian Cross" />
        </FormGroup>

        <FormGroup htmlFor="email">
          Email:
          <Field name="email" placeholder="across@mail.com" type="email" />
        </FormGroup>

        <FormGroup htmlFor="password">
          Password:
          <Field name="password" placeholder="example12345" type="password" />
        </FormGroup>

        <SubmitButton type="submit">Sign up</SubmitButton>
      </Form>
    </Formik>
  );
};
