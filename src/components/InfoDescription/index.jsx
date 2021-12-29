import { ErrorDescription } from "./Error/errorDescription";
import {
  WrapperDescriptions,
  TitleComics,
  DatePublication,
  TextDescriptions,
} from "./styles";

export function InfoDescription({ title, dateSale, description }) {
  return (
    <>
      <TitleComics>{title}</TitleComics>
      <DatePublication> Publicação: {dateSale}</DatePublication>
      <WrapperDescriptions>
        <h3>Descrição</h3>
        {description === null ? (
          <ErrorDescription />
        ) : (
          <TextDescriptions>{description}</TextDescriptions>
        )}
      </WrapperDescriptions>
    </>
  );
}
