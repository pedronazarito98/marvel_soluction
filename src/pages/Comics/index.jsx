import { useCart } from "../../hooks/useCart";

import { Container, WrapperCard } from "./styles";
import { CardHq } from "../../components/Card/Hq";
import { useComics } from "../../hooks/useComics";
import { ButtonShowMore } from "../../components/ShowMore";
import { Header } from "../../components/Header";

export function Comics() {
  const { comics, handleMore, isLoading } = useComics();
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, item) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[item[0].id] = item.amount;

    return newSumAmount;
  }, {});

  function handleAddProduct(id) {
    addProduct(id);
  }

  return (
    <>
      <Header namePage="Encontre suas HQ's" />

      <Container>
        <WrapperCard>
          {comics.map((item) => {
            return (
              <>
                <CardHq
                  typeLink="comics"
                  key={item.id}
                  link={item.id}
                  title={item.title}
                  price={item.price}
                  thumbnailPath={item.thumbnail.path}
                  thumbnailExtension={item.thumbnail.extension}
                  onClick={() => handleAddProduct(item.id)}
                  valueProduct={cartItemsAmount[item.id]}
                />
              </>
            );
          })}
        </WrapperCard>
        <ButtonShowMore isLoading={isLoading} onClick={handleMore} />
      </Container>
    </>
  );
}
