import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

export const GetComicsContext = createContext();

export function GetComicsProvider({ children }) {
  const [comics, setComics] = useState([]);
  useEffect(async () => {
    try {
      const { data } = await api.get("comics", {
        params: {
          format: "comic",
          formatType: "comic",
          noVariants: true,
          orderBy: "title",
        },
      });
      const { results } = data.data;
      results.forEach((element) => {
        element.price = element.prices[0].price;
      });
      setComics(results);
    } catch (error) {
      return error;
    }
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = comics.length;
      const { data } = await api.get("comics", {
        params: {
          offset,
          format: "comic",
          formatType: "comic",
          noVariants: true,
          orderBy: "title",
        },
      });
      const { results } = data.data;
      results.forEach((element) => {
        element.price = element.prices[0].price;
      });
      setComics([...comics, ...results]);
    } catch (error) {
      return error;
    }
  }, [comics]);

  return (
    <GetComicsContext.Provider value={{ comics, handleMore }}>
      {children}
    </GetComicsContext.Provider>
  );
}

export function useGetComics() {
  const context = useContext(GetComicsContext);

  return context;
}
