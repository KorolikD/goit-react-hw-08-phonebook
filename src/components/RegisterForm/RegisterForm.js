import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { registration } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registration({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" placeholder="Adrian Cross" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" placeholder="across@mail.com" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" placeholder="examplepwd12345" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};