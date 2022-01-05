import { MdExpandMore } from "react-icons/md";
import { useCart } from "../../contexts/useCart";

import { Container, ShowMore, WrapperCard } from "./styles";
import { CardHq } from "../../components/Card/Hq";
import { useComics } from "../../contexts/useComics";
import { CardHome } from "../../components/Card/Home/index";
import { useParams } from "react-router-dom";

export function Home() {
  const { comics, handleMore } = useComics();
  const { addProduct, cart } = useCart();
  const { id } = useParams();

  const cartItemsAmount = cart.reduce((sumAmount, item) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[item[0].id] = item.amount;

    return newSumAmount;
  }, {});
  console.log("cartItemsAmount", cartItemsAmount);

  function handleAddProduct(id) {
    addProduct(id);
  }

  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardHome
            title="Comics"
            description="Encontre suas HQ's favorita"
            redirectUrl="/"
          />
          <CardHome
            title="Personagens"
            description="Encontre suas HQ's escolhidas"
            redirectUrl="characters"
          />

          <CardHome
            title="Carrinho"
            description="Encontre suas HQ's escolhidas"
            redirectUrl="cart"
          />
        </div>
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
        <ShowMore onClick={handleMore}>
          {" "}
          Veja mais <MdExpandMore />
        </ShowMore>
      </Container>
    </>
  );
}
