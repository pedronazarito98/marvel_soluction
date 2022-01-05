import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.header`
  width: 100%;
  padding: 0.9rem;
  background-color: #202020;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const LinkCart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  div {
    text-align: right;
    margin-right: 0.625rem;

    strong {
      display: block;
      color: #fff;
    }

    span {
      margin-right: 0.625rem;
      font-size: 0.75rem;
      color: #999;
    }
  }
`;
