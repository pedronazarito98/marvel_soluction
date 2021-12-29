import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";

import { InfoDescription } from "../../components/InfoDescription";
import { api } from "../../services/api";
import { FormatDate } from "../../utils/format";
import {
  Container,
  Content,
  ImageBook,
  Wrapper,
  WrapperDescriptions,
} from "./style";

export function DetailComics() {
  const { id } = useParams();
  const [comic, setComic] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await api.get(`comics/${id}`);
      const { results } = data.data;

      results.forEach((element) => {
        element.dateSale = element.dates[0].date;
      });
      setComic(results);
    } catch (error) {
      return error;
    }
  }, []);

  console.log("comic", comic);
  return (
    <>
      <Header namePage="Comics" />
      <Container>
        {comic.map((item) => (
          <Wrapper key={item.id}>
            <ImageBook
              src={`${item.images[0].path}.${item.images[0].extension}`}
              alt=""
            />

            <Content>
              <InfoDescription
                title={item.title}
                dateSale={item.dateSale}
                description={item.description}
              />
            </Content>
          </Wrapper>
        ))}
      </Container>
    </>
  );
}
