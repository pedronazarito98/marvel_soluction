import { MdExpandMore } from "react-icons/md";
import { ShowMore } from "./styles";

export function ButtonShowMore({ isLoading, onClick }) {
  return (
    <ShowMore onClick={onClick}>
      {!isLoading ? (
        <>
          Veja mais <MdExpandMore />
        </>
      ) : (
        <>Carregando</>
      )}
    </ShowMore>
  );
}
