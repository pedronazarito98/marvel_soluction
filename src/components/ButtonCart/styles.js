import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.button`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 0.25rem;
  overflow: hidden;
  margin-top: 0.625rem;
  padding: 0px 0.625rem 0px 0px;
  width: 100%;

  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.06, "#7159c1")};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.625rem;
    background: rgba(0, 0, 0, 0.1);

    svg {
      margin-right: 0.313rem;
    }
  }

  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
    margin-left: 0.313rem;
    font-size: 0.65rem;
  }
`;
