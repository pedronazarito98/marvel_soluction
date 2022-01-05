import { Button } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";

export function ButtonCart({ valueProduct, onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      <div>
        <MdAddShoppingCart size={16} color="#FFF" />
        {valueProduct}
      </div>

      <span>ADICIONAR AO CARRINHO</span>
    </Button>
  );
}
