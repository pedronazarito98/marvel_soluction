import styled from "styled-components";

export const Nav = styled.header`
  width: 100%;
  padding: 0.9rem;
  background-color: #202020;

  display: flex;
  align-items: center;
  justify-content: center;
  a {
    transition: all 1s ease;
    &:hover {
      transform: scale(0.9);
    }
  }
`;
