import { MdExpandMore } from "react-icons/md";
import { CardHq } from "../../components/Card/Hq";
import { ButtonShowMore } from "../../components/ShowMore";
import { useComics } from "../../contexts/useComics";
import { ShowMore } from "../Home/styles";
import { ContainerCharacters } from "./style";

export function Characters() {
  const { characters, handleMoreCharacters, isLoading } = useComics();
  return (
    <>
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
