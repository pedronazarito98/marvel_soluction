import styled from "styled-components";

export const WrapperDescriptions = styled.div`
  margin: 1.25rem 0;

  h3 {
    color: #fff;
  }
`;

export const TitleComics = styled.h1`
  margin: 0.625rem 0;
  color: #fff;
  font-weight: bold;
`;
export const PriceComics = styled.h3`
  color: #fff;

  span {
    color: #B8B3B3;
  }
`;

export const DatePublication = styled(PriceComics)`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.625rem;
`;


export const TextDescriptions = styled.p`
  color: #858585;
  margin-top: 0.625rem;
`;
