import styled from "styled-components";

export const WrapperComics = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
  
  @media (max-width: 425px) {
    align-items: center;
    justify-content: center;
  }
`;

export const MoreComics = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.25rem auto;
  h1 {
    color: #fff;
  }
`;

export const CardComics = styled.div`
  width: 100%;
  max-width: 200px;

  display: flex;
  flex-direction: column;
  padding: 10px;

  img {
    width: 100%;
  }
  a {
    p {
      margin-top: 10px;
      color: #fff;
      &:hover {
        color: red;
      }
    }
  }
`;
