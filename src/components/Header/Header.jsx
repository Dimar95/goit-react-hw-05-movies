import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, PageHeader } from './Header.styled.jsx';
const Header = () => {
  return (
    <>
      <PageHeader>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </PageHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Header;
