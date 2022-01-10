import {
  Container,
  TextDescription,
  WrapperDirection,
  WrapperImage,
} from "./styles";
import imgHome from "../../assets/blackPanther.svg";
import { CardHome } from "../../components/Card/Home";

export function InitialPage() {
  return (
    <Container>
      <TextDescription>
        <h1>Bem vindo(a) ao E-comics 📚 </h1>
        <h2>
          Encontre sua HQ favorita, ou encontre através do vasto número de
          personagens e suas referentes HQ's
        </h2>
        <WrapperDirection>
          <CardHome
            title="HQ's"
            description="Encontre suas HQ's favoritas"
            redirectUrl="comics"
          />
          <CardHome
            title="Personagens"
            description="Encontre seus personagens favoritos"
            redirectUrl="characters"
          />
        </WrapperDirection>
      </TextDescription>
      <WrapperImage>
        <img src={imgHome} alt="" />
      </WrapperImage>
    </Container>
  );
}
