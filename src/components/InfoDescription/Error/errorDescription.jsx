import { Container } from "./styles";
import manopolaImg from "../../../assets/manopola-edit.png";
export function ErrorDescription() {
  return (
    <Container>
      <img src={manopolaImg} alt="" loading="eager" />
      <span> OPS, Descrição não encontrada!</span>
    </Container>
  );
}
