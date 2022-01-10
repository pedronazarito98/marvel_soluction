import { MdShoppingBasket } from "react-icons/md";
import { useCart } from "../../../hooks/useCart";
import { NavLink, Link,LinkCart } from "./styles";

export function RightNav({ open }) {
  const { cart } = useCart();
  const cartSize = cart.length;
  return (
    <NavLink open={open}>
      <Link to="/">HQ's</Link>
      <Link to="/characters">Personagens</Link>
      <LinkCart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </LinkCart>
    </NavLink>
  );
}
