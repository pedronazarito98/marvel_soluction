import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { sendRequest } from "../../services/sendRequest";

import { Header } from "../../components/Header";
import { Container, Content, ImageBook, Wrapper } from "./style";
import { InfoDescription } from "../../components/InfoDescription";

export function DetailComics() {
  const { id } = useParams();
  const [detailsComics, setDetailsComics] = useState([]);

  useEffect(() => {
    async function getDetailsComics() {
      try {
        const results = await sendRequest.getDetailsComics(id);
        setDetailsComics(results);
      } catch (error) {
        return error;
      }
    }
    getDetailsComics();
  }, [id]);

  return (
    <>
      <Header namePage="Comics" />
      <Container>
        {detailsComics.map((item) => {
          const { id, title, dateSale, description, price } = item;
          const urlImg = `${item.thumbnail.path}.${item.thumbnail.extension}`;
          const updatedAt = moment(dateSale).format("ll");

          return (
            <>
              <Wrapper key={id}>
                <ImageBook src={urlImg} alt={title} loading="lazy"/>

                <Content>
                  <InfoDescription
                    productId={id}
                    title={title}
                    dateSale={updatedAt}
                    description={description}
                    price={price}
                    typeInfo="comics"
                  />
                </Content>
              </Wrapper>
            </>
          );
        })}
      </Container>
    </>
  );
}
