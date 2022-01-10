import { Burger } from "./Burger/Burger";
import { Logo, Nav } from "./StyleNav";
import logoMarvel from "../../assets/logo.svg";
export function Navbar() {
  return (
    <Nav>
      <Logo to="/">
        <img src={logoMarvel} alt="Logo" loading="lazy" />
      </Logo>
      <Burger />
    </Nav>
  );
}
