import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { InfoDescription } from "../../components/InfoDescription";
import { sendRequest } from "../../services/sendRequest";
import { Container, Content, ImageBook, Wrapper } from "../DetailsComics/style";
import { CardComics, WrapperComics ,MoreComics} from "./styles";

export function DetailsCharacters() {
  const { id } = useParams();
  const [detailsCharacters, setDetailsCharacters] = useState([]);
  const [comicsCharacters, setComicsCharacters] = useState([]);

  useEffect(() => {
    async function getDetailsCharacters() {
      try {
        const results = await sendRequest.getDetailsCharacters(id);
        setDetailsCharacters(results);
      } catch (error) {
        return error;
      }
    }
    getDetailsCharacters();
  }, [id]);

  useEffect(() => {
    async function getComicsCharacters() {
      try {
        const results = await sendRequest.getComicsCharacters(id);
        setComicsCharacters(results);
      } catch (error) {
        return error;
      }
    }
    getComicsCharacters();
  }, [id]);

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
