import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';
const Header = () => {
  return (
    <>
      <header className={css.pageHeader}>
        <NavLink className={css.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.navLink} to="/movies">
          Movies
        </NavLink>
      </header>
      <Outlet />
    </>
  );
};
export default Header;
