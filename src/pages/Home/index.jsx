import { MdExpandMore } from "react-icons/md";
import { useCart } from "../../contexts/useCart";

import { Container, ShowMore, WrapperCard, WrapperDirection } from "./styles";
import { CardHq } from "../../components/Card/Hq";
import { useComics } from "../../contexts/useComics";
import { CardHome } from "../../components/Card/Home/index";
import { useParams } from "react-router-dom";
import { ButtonShowMore } from "../../components/ShowMore";

export function Home() {
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
      <Container>
        <WrapperDirection>
          <CardHome
            title="Comics"
            description="Encontre suas HQ's favoritas"
            redirectUrl="/"
          />
          <CardHome
            title="Personagens"
            description="Encontre seus personagens favoritos"
            redirectUrl="characters"
          />
        </WrapperDirection>
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
