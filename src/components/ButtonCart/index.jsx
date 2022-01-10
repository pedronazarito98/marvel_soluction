import { Button } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";

export function ButtonCart({ valueProduct, onClick, isDisabled }) {
  return (
    <Button type="button" onClick={onClick} disabled={isDisabled}>
      <div>
        <MdAddShoppingCart size={16} color="#FFF" />
        {valueProduct}
      </div>

      <span>ADICIONAR AO CARRINHO</span>
    </Button>
  );
}
