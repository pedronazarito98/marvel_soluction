import { Container, ShowMore } from "./styles";
import { CardHq } from "../../components/Card/Hq";
import { CardHome } from "../../components/Card/Home/index";
import { useGetComics } from "../../contexts/useComics";

import { MdExpandMore } from "react-icons/md";
export function Home() {
  const { comics, handleMore } = useGetComics();

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardHome title="Comics" description="Encontre sua HQ favorita" />
        <CardHome title="Comics" description="Encontre sua HQ favorita" />
      </div>
      <Container>
        <ul>
          {comics.map((item) => {
            return (
              <>
                <CardHq
                  key={item.id}
                  link={item.id}
                  title={item.title}
                  price={item.price}
                  thumbnailPath={item.thumbnail.path}
                  thumbnailExtension={item.thumbnail.extension}
                />
              </>
            );
          })}
        </ul>
        <ShowMore onClick={handleMore}>
          {" "}
          Veja mais <MdExpandMore />
        </ShowMore>
      </Container>
    </>
  );
}
