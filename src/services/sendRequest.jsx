import { api } from "./api";

export const sendRequest = {
  getComics: async (offset) => {
    try {
      const { data } = await api.get("comics", {
        params: {
          format: "comic",
          formatType: "comic",
          noVariants: true,
          orderBy: "modified",
          offset: offset,
        },
      });
      const { results } = data.data;
      results.forEach((element) => {
        element.price = element.prices[0].price;
      });
      return results;
    } catch (error) {
      throw error;
    }
  },
  getDetailsComics: async (id) => {
    try {
      const { data } = await api.get(`comics/${id}`);
      const { results } = data.data;

      results.forEach((element) => {
        element.dateSale = element.dates[0].date;
        element.price = element.prices[0].price;
      });

      return results;
    } catch (error) {
      return error;
    }
  },
  getCharacters: async (offset) => {
    try {
      const { data } = await api.get(`characters`, {
        params: {
          orderBy: "name",
          offset: offset,
          limit: "16",
        },
      });
      const { results } = data.data;
      return results;
    } catch (error) {
      return error;
    }
  },
  getDetailsCharacters: async (id) => {
    try {
      const { data } = await api.get(`characters/${id}`);
      const { results } = data.data;

      return results;
    } catch (error) {
      return error;
    }
  },
  getComicsCharacters: async (id) => {
    try {
      const { data } = await api.get(`characters/${id}/comics`);
      const { results } = data.data;

      return results;
    } catch (error) {
      return error;
    }
  },
};
