import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../Navigation/AuthNav';
import { useAuth } from 'hoocs';
import { TiContacts } from 'react-icons/ti';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <TiContacts style={{ width: 30, height: 30 }} />
        <Navigation />
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
