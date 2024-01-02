import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Loader } from './Loader/Loader';
import { Container } from './Layout.styled';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster top="100" position="top-right" reverseOrder={false} />
    </Container>
  );
};
