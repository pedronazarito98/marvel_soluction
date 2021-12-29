import { Wrapper } from "./styles";

export function Header({ namePage }) {
  return (
    <Wrapper>
      <h1>{namePage}</h1>
    </Wrapper>
  );
}
