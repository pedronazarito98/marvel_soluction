import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapperDirection = styled.section`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TextDescription = styled.section`
  padding: 10px 20px;
  max-width: 500px;
  h1 {
    font-size: 2rem;
    color: white;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #ffffff99;
  }
`;

export const WrapperImage = styled.div`
  max-width: 500px;
  img {
    width: 100%;
    max-width: 655px;
  }
`;
