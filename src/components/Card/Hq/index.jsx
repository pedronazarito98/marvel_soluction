import { Card, Content, Link } from "./styles";

import { ButtonCart } from "../../ButtonCart";
import { FormatCurrency } from "../../../utils/format";
import { Link as LinkImage } from "react-router-dom";

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
      <LinkImage to={`/${typeLink}/` + link}>
        <img
          src={`${thumbnailPath}.${thumbnailExtension}`}
          alt={title}
          loading="lazy"
        />
      </LinkImage>
      <Content>
        <Link data-hover={title} to={`/${typeLink}/` + link}>
          {title}
        </Link>
        {typeLink === "comics" && <p> {FormatCurrency(price)}</p>}
        {typeLink === "comics" && (
          <ButtonCart valueProduct={valueProduct} onClick={onClick} />
        )}
      </Content>
    </Card>
  );
}
