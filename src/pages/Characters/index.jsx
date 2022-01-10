import { CardHq } from "../../components/Card/Hq";
import { Header } from "../../components/Header";
import { ButtonShowMore } from "../../components/ShowMore";
import { useComics } from "../../hooks/useComics";
import { ContainerCharacters } from "./style";

export function Characters() {
  const { characters, handleMoreCharacters, isLoading } = useComics();
  return (
    <>
      <Header namePage="Escolha seu personagem e encontre suas HQ's" />

      <ContainerCharacters>
        {characters.map((item) => {
          return (
            <>
              <CardHq
                typeLink="characters"
                key={item.id}
                link={item.id}
                title={item.name}
                thumbnailPath={item.thumbnail.path}
                thumbnailExtension={item.thumbnail.extension}
              />
            </>
          );
        })}
        <ButtonShowMore isLoading={isLoading} onClick={handleMoreCharacters} />
      </ContainerCharacters>
    </>
  );
}
