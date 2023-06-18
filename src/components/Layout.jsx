import { Outlet } from 'react-router-dom';
import { AppBar } from './Header/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 10px' }}>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
