import { Nav, LinkCart } from "./styles";
import logoMarvel from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/useCart";
import { MdShoppingBasket } from "react-icons/md";

export function Navbar() {
  const { cart } = useCart();
  const cartSize = cart.length;
  return (
    <>
      <Nav>
        <Link to="/">
          <img src={logoMarvel} alt="logo" loading="eager" />
        </Link>
        <LinkCart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
            </span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </LinkCart>
      </Nav>
    </>
  );
}
