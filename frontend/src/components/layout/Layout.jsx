import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../img/chat_32.png';
import logout from '../../img/logout_32.png';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to={'/'}>
            <img src={logo} alt='logo' width={'32px'} height={'32px'} />
          </NavLink>
          <NavLink>
            <img src={logout} alt='logout' width={'32px'} height={'32px'} />
          </NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
