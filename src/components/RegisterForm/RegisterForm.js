import { useDispatch } from 'react-redux';
import { registration } from '../../redux/auth/operations';

import {
  Field,
  Form,
  FormGroup,
  SubmitButton,
} from 'components/ContactForm/ContactForm.styled';
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
          <Field id="userName" name="userName" placeholder="John" />
        </FormGroup>
        <FormGroup htmlFor="email">
          Email:
          <Field id="email" name="email" placeholder="jane@smile.com" />
        </FormGroup>

        <FormGroup htmlFor="password">
          Password:
          <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
          />
        </FormGroup>
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    </Formik>
  );

  // return (
  //   <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
  //     <label className={css.label}>
  //       Username
  //       <input type="text" name="name" placeholder="Adrian Cross" />
  //     </label>
  //     <label className={css.label}>
  //       Email
  //       <input type="email" name="email" placeholder="across@mail.com" />
  //     </label>
  //     <label className={css.label}>
  //       Password
  //       <input type="password" name="password" placeholder="examplepwd12345" />
  //     </label>
  //     <button type="submit">Register</button>
  //   </form>
  // );
};
