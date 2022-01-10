import styled from "styled-components";

export const ShowMore = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  margin-top: 20px;

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
