import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header style={{ height: '100px', backgroundColor: 'blue' }}>
        Hello
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
