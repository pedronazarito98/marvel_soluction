import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`  
  0% { transform: rotate(3deg) }
  100% { transform: rotate(-3deg) }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  padding: 10px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  img {
    width: 45%;
    animation: ${FadeInAnimation} ease-in-out 1s infinite alternate;
  }
  span {
    color: #858585;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    max-width: 22.813rem;
  }
`;
