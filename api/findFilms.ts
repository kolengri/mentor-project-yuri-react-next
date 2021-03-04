import { Film } from "../models";
import { apiCall } from "./apiCall";

type Result = {
  results: Film[];
};

export const findFilm = (filmTitle: string) =>
  apiCall<Result>("", "GET", {
    query: {
      query: filmTitle,
    },
  });
