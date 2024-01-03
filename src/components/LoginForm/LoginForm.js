import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik } from 'formik';
import { Field, Form, FormGroup, SubmitButton } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit2 = ({ email, password }, actions) => {
    const newContact = {
      email,
      password,
    };
    dispatch(logIn(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit2}
    >
      <Form>
        <FormGroup>
          Email
          <Field type="email" name="email" />
        </FormGroup>

        <FormGroup>
          Password
          <Field type="password" name="password" />
        </FormGroup>

        <SubmitButton type="submit">Log In</SubmitButton>
      </Form>
    </Formik>
  );
};
