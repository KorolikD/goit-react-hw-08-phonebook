import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hoocs';
import { Button, Username, Wrapper } from './UserMenu.styled';
import { FaUserCircle } from 'react-icons/fa';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <FaUserCircle style={{ width: 20, height: 20 }} />
      <Username> {user.name}</Username>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
