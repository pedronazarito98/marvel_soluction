import styled from "styled-components";

export const ContainerCharacters = styled.main`
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  max-width: 75rem;
`;

export const Card = styled.div`
  background: #f1f1f1;
  width: 100%;
  max-width: 15.625rem;
  margin: 0.625rem;
  border-radius: 0.313rem;
  overflow: hidden;
  box-shadow: 0.125rem 0.125rem 0.625rem rgb(255 255 255 / 42%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 1rem;

    -webkit-line-clamp: 2; //? Define quantas linhas
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
  }
  img {
    height: 200px;
    width: 100%;
  }
  button {
    margin-top: 10px;
    padding: 10px 20px;
    background: green;
  }
`;
