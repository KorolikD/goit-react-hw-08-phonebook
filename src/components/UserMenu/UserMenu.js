import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
// import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { useAuth } from '../../redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}> {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};