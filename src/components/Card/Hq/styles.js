import styled from "styled-components";

export const Card = styled.div`
  background: #f1f1f1;
  height: 400px;
  width: 100%;
  max-width: 200px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1 rgba(0, 0, 0, 0.3)

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img{
      height: 250px;
      width: 100%;

      transition:  all 1s ease;
      &:hover{
        transform: scale(0.95);
      }
  }

`;

export const Content = styled.div`
  padding: 10px;
  /* background-color:red; */
  a {
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
    transition: all 0.2s ease;
    &:hover {
      color: gray;
    }
  }

  p {
    margin-top: 5px;
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
