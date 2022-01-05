import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 56.25rem;
  margin: 0 auto;
  padding: 1.25rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ImageBook = styled.img`
  width: 100%;
  max-width: 20rem;
  height: 28.75rem;
  border-radius: 0.625rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 31.25rem;
`;
