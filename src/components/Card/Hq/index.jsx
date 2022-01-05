import { Link } from "react-router-dom";

import { Card, Content } from "./styles";

import { ButtonCart } from "../../ButtonCart";
import { FormatCurrency } from "../../../utils/format";

export function CardHq({
  thumbnailPath,
  thumbnailExtension,
  link,
  typeLink,
  title,
  price,
  key,
  onClick,
  valueProduct,
}) {
  return (
    <Card key={key}>
      <Link to={`/${typeLink}/` + link}>
        <img
          src={`${thumbnailPath}.${thumbnailExtension}`}
          alt={title}
          loading="eager"
        />
      </Link>
      <Content>
        <Link to={`/${typeLink}/` + link}>{title}</Link>
        {price && <p> {FormatCurrency(price)}</p>}
        {typeLink === "comics" && (
          <ButtonCart valueProduct={valueProduct} onClick={onClick} />
        )}
      </Content>
    </Card>
  );
}
