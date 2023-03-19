import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
  display: flex;
  color: brown;
  /* border-bottom: 1px #f4f4f4 solid; */
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 10px;
  background-color: #a9ddff;
  border-end-end-radius: 20px;
`;

export const StyledLink = styled(NavLink)`
  margin-left: 30px;
  padding: 20px;
  text-decoration: none;
  color: #212121;

  &.active {
    color: #b92121;
  }
`;
