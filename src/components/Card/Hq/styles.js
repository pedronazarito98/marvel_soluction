import styled from "styled-components";

export const Card = styled.div`
  background: #f1f1f1;
  height: 25rem;
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
  img {
    height: 15rem;
    width: 100%;

    transition: all 1s ease;
    &:hover {
      transform: scale(0.95);
    }
  }
`;

export const Content = styled.div`
  padding: 0.625rem;
  width: 100%;
  max-width: 14.375rem;
  a {
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
    transition: all 0.2s ease;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; //? Define quantas linhas
    -webkit-box-orient: vertical;
    &:hover {
      color: gray;
    }
  }

  p {
    margin-top: 0.313rem;
    font-size: 0.8rem;
    font-weight: normal;

    color: #000000b8;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; //? Define quantas linhas
    -webkit-box-orient: vertical;
  }
`;
