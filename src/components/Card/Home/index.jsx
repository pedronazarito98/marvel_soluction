import { Card, DescriptionCard, GoArrow, GoCorner, TitleCard } from "./styles";

export function CardHome({ title, description, redirectUrl }) {
  return (
    <>
      <Card to={redirectUrl}>
        <TitleCard>{title}</TitleCard>
        <DescriptionCard class="small">{description}</DescriptionCard>

        <GoCorner>
          <GoArrow>→</GoArrow>
        </GoCorner>
      </Card>
    </>
  );
}
