import { useEffect, useState } from "react";
import { sendRequest } from "../services/sendRequest";

export function useDetails(id) {
  const [detailsCharacters, setDetailsCharacters] = useState([]);
  const [comicsCharacters, setComicsCharacters] = useState([]);
  const [detailsComics, setDetailsComics] = useState([]);

  useEffect(() => {
    async function getDetailsComics() {
      try {
        const results = await sendRequest.getDetailsComics(id);
        setDetailsComics(results);
      } catch (error) {
        return error;
      }
    }
    getDetailsComics();
  }, [id]);

  useEffect(() => {
    async function getDetailsCharacters() {
      try {
        const results = await sendRequest.getDetailsCharacters(id);
        setDetailsCharacters(results);
      } catch (error) {
        return error;
      }
    }
    getDetailsCharacters();
  }, [id]);
  useEffect(() => {
    async function getComicsCharacters() {
      try {
        const results = await sendRequest.getComicsCharacters(id);
        setComicsCharacters(results);
      } catch (error) {
        return error;
      }
    }
    getComicsCharacters();
  }, [id]);

  return { detailsCharacters, comicsCharacters, detailsComics, id };
}
