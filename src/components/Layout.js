import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Loader } from './Loader/Loader';
import { HeaderContainer, Header, Container } from './Layout.styled';
import { AppBar } from './AppBar/AppBar';
import { theme } from 'styles';

export const Layout = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <AppBar />
        </HeaderContainer>
      </Header>
      <main style={{ padding: '32px 0' }}>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          <Toaster
            position="top-right"
            reverseOrder={false}
            containerStyle={{
              top: `${theme.spacing(2)}`,
            }}
            toastOptions={{
              success: {
                style: {
                  background: '#BAFFAD',
                },
              },
              error: {
                style: {
                  background: '#FFA7A7',
                },
              },
            }}
          />
        </Container>
      </main>
    </>
  );
};
