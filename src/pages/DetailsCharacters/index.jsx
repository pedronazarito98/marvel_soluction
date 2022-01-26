import moment from "moment";

import { Header } from "../../components/Header";
import { Link, useParams } from "react-router-dom";

import { CardComics, WrapperComics, MoreComics } from "./styles";
import { InfoDescription } from "../../components/InfoDescription";
import { Container, Content, ImageBook, Wrapper } from "../DetailsComics/style";
import { useDetails } from "../../hooks/useDetails";

export function DetailsCharacters() {
  const { id } = useParams();

  const { detailsCharacters, comicsCharacters } = useDetails(id);

  return (
    <>
      <Header namePage="Personagens" />
      <Container>
        {detailsCharacters.map((item) => {
          const { id, name, dateSale, description } = item;
          const urlImg = `${item.thumbnail.path}.${item.thumbnail.extension}`;
          const updatedAt = moment(dateSale).format("ll");

          return (
            <>
              <Wrapper key={id}>
                <ImageBook src={urlImg} alt={name} />

                <Content>
                  <InfoDescription
                    productId={id}
                    title={name}
                    dateSale={updatedAt}
                    description={description}
                    typeInfo="characters"
                  />
                </Content>

                <MoreComics>
                  <h1>Quadrinhos em que aparece:</h1>
                  <WrapperComics>
                    {comicsCharacters.map((comic) => {
                      const { id, title } = comic;
                      const img = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
                      return (
                        <>
                          <CardComics>
                            <Link to={`/comics/` + id}>
                              <img src={img} alt={title} loading="lazy" />
                            </Link>
                            <Link to={`/comics/` + id}>
                              <p key={id}>{title}</p>
                            </Link>
                          </CardComics>
                        </>
                      );
                    })}
                  </WrapperComics>
                </MoreComics>
              </Wrapper>
            </>
          );
        })}
      </Container>
    </>
  );
}
