import { Nav } from "./styles";
import logoMarvel from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <Nav>
        <Link to="/">
          <img src={logoMarvel} alt="logo" loading="eager" />
        </Link>
      </Nav>
    </>
  );
}
