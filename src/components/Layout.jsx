import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 10px' }}>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
