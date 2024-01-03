import { useAuth } from 'hoocs';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const canRedirect = !isLoggedIn && !isRefreshing;
  return canRedirect ? <Navigate to={redirectTo} /> : Component;
};
