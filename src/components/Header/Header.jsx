import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
const Header = () => {
  return (
    <header className={css.pageHeader}>
      <NavLink className={css.navLink} to="/home">
        Home
      </NavLink>
      <NavLink className={css.navLink} to="/movies">
        Movies
      </NavLink>
    </header>
  );
};
export default Header;
