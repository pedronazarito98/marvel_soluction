import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 90px;
  background: #202020;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const Logo = styled(Link)`
  padding: 15px 0;
`;
