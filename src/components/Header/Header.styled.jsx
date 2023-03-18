import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
  display: flex;
  color: brown;
  text-decoration: none;
  border-bottom: 1px #f4f4f4 solid;
`;

export const StyledLink = styled(NavLink)`
  margin-left: 30px;
  padding: 20px;
  &.active {
    color: #b92121;
  }
`;
