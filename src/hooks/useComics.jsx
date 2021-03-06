import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { sendRequest } from "../services/sendRequest";

export const GetComicsContext = createContext();

export function GetComicsProvider({ children }) {
  const [comics, setComics] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getComics() {
      try {
        const results = await sendRequest.getComics();

        setComics(results);
      } catch (err) {
        return err;
      }
    }
    getComics();
  }, []);

  useEffect(() => {
    async function getCharacters() {
      try {
        const results = await sendRequest.getCharacters();
        setCharacters(results);
      } catch (err) {
        return err;
      }
    }
    getCharacters();
  }, []);

  const handleMore = useCallback(async () => {
    setIsLoading(true);
    try {
      const offset = comics.length;
      const results = await sendRequest.getComics(offset);
      setComics([...comics, ...results]);
      setIsLoading(false);
    } catch (error) {
      return error;
    }
  }, [comics]);

  const handleMoreCharacters = useCallback(async () => {
    setIsLoading(true);
    try {
      const offset = characters.length;
      const results = await sendRequest.getCharacters(offset);
      setCharacters([...characters, ...results]);
      setIsLoading(false);
    } catch (error) {
      return error;
    }
  }, [characters]);

  return (
    <GetComicsContext.Provider
      value={{
        comics,
        handleMore,
        handleMoreCharacters,
        characters,
        isLoading,
      }}
    >
      {children}
    </GetComicsContext.Provider>
  );
}

export function useComics() {
  const context = useContext(GetComicsContext);

  return context;
}
