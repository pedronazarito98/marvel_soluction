import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0 30px 0;
`;

export const WrapperCard = styled.div`
  /* max-width: 75rem; */
  width: 100%;
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0.313rem auto;
  padding: 0.938rem;

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
    font-size: 1.25rem;
  }
  &:hover {
    filter: brightness(0.9);
  }
`;
