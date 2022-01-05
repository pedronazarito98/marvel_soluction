import { MdExpandMore } from "react-icons/md";
import { CardHq } from "../../components/Card/Hq";
import { useComics } from "../../contexts/useComics";
import { ShowMore } from "../Home/styles";
import { ContainerCharacters } from "./style";

export function Characters() {
  const { characters, handleMoreCharacters } = useComics();
  console.log("characters: ", characters);
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
                // price={item.price}
                thumbnailPath={item.thumbnail.path}
                thumbnailExtension={item.thumbnail.extension}
              />
            </>
          );
        })}
        <ShowMore onClick={handleMoreCharacters}>
          Veja mais <MdExpandMore />
        </ShowMore>
      </ContainerCharacters>
    </>
  );
}
