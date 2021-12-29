import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px auto;
  padding: 15px;

  background: red;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    flex-wrap: wrap;
  }
`;

export const ShowMore = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 0.2s;
  svg {
    font-size: 20px;
  }
  &:hover {
    filter: brightness(0.9);
  }
`;
