import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const LinkCart = styled(ReactLink)`
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
  @media( max-width: 768px) {
    margin-left: 0.95rem;
  }
`;
export const Link = styled(ReactLink)`
  padding: 5px 15px;
  margin-right: 20px;
  transition: all 0.2s ease-in-out;
  color: #fff;
  font-size: 1.3rem;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;

    height: 2px;
    bottom: 0;
    width: 0;

    background: none repeat scroll 0 0 transparent;
    display: block;
    transition: all 0.3s ease 0s, right 0.3s ease 0s;
  }
  &:hover {
    background: white;
    color: #000;
    border-radius: 5px;
    &::after {
      width: 90%;
    }
  }
`;

export const NavLink = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    z-index: 2;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    ${Link} {
      color: #fff;
    }
  }
`;
