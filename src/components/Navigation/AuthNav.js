import { NavigateLink } from './Navigation.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavigateLink to="/register">Register</NavigateLink>
      <NavigateLink to="/login">Log In</NavigateLink>
    </div>
  );
};
