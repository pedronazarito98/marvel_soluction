import { Link } from "react-router-dom";
import { Card, Content } from "./styles";
import { FormatCurrency } from "../../../utils/format";
export function CardHq({
  thumbnailPath,
  thumbnailExtension,
  link,
  title,
  price,
  key,
}) {
  return (
    <Card key={key}>
      <Link to={"/" + link}>
        <img
          src={`${thumbnailPath}.${thumbnailExtension}`}
          alt=""
          loading="eager"
        />
      </Link>
      <Content>
        <Link to={"/" + link}>{title}</Link>
        <p> {FormatCurrency(price)}</p>
      </Content>
    </Card>
  );
}
