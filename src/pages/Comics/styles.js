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
  width: 100%;
  display: flex;
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

