import { useCart } from "../../hooks/useCart";
import { FormatCurrency } from "../../utils/format";
import { ButtonCart } from "../ButtonCart";
import { ErrorDescription } from "./Error/errorDescription";
import {
  WrapperDescriptions,
  TitleComics,
  DatePublication,
  TextDescriptions,
  PriceComics,
} from "./styles";

export function InfoDescription({
  title,
  dateSale,
  description,
  productId,
  price,
  typeInfo,
}) {
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, item) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[item[0].id] = item.amount;

    return newSumAmount;
  }, {});

  function handleAddProduct(id) {
    addProduct(id);
  }
  const isDisabled = price === 0 ? true : false;
  return (
    <>
      <TitleComics>{title}</TitleComics>
      <DatePublication>
        Lançamento: <span>{dateSale}</span>
      </DatePublication>

      {typeInfo === "comics" && (
        <PriceComics>
          Valor: <span>{FormatCurrency(price)}</span>
        </PriceComics>
      )}

      <WrapperDescriptions>
        <h3>Descrição</h3>
        {!description ? (
          <ErrorDescription />
        ) : (
          <TextDescriptions>{description}</TextDescriptions>
        )}
      </WrapperDescriptions>
      {typeInfo === "comics" && (
        <ButtonCart
          isDisabled={isDisabled}
          onClick={() => handleAddProduct(productId)}
          valueProduct={cartItemsAmount[productId]}
        />
      )}
    </>
  );
}
