import * as React from "react";

import styles from "./styles.module.scss";
import { openUrl } from "../../utils";
import { Film } from "../../models";
import { findFilm } from "../../api/findFilms";

export type AutocompleteListTemplate = "List" | "Poster";

export type AutocompleteProps = {
  filmName: string;
  templateType: AutocompleteListTemplate;
};

const IMDB_URL = "https://www.themoviedb.org/movie/";

type Films = Film[];

const makeFilmUrl = (id: number, title: string) => {
  const cleanTitle = title
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/ /g, "-")
    .toLowerCase();
  return `${IMDB_URL}${id}-${cleanTitle}`;
};

const useFindFilm = (filmName: string) => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<Films>([]);

  const fetchFilms = async () => {
    try {
      setLoading(true);
      const result = await findFilm(filmName);
      setLoading(false);
      setItems(result.results);
    } catch (error) {
      setItems([]);
      setError(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (filmName !== "") {
      fetchFilms();
    }
  }, [filmName]);

  return { items, loading, error };
};

export const Autocomplete: React.FC<AutocompleteProps> = (props) => {
  const { templateType, filmName } = props;
  const { items, loading, error } = useFindFilm(filmName);

  if (error) {
    return (
      <div className={styles.autocompleteStyling}>An error has occured.</div>
    );
  }

  if (loading) {
    return <div className={styles.autocompleteStyling}>Loading...</div>;
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={styles.autocompleteStyling}>
      <div className={styles.autocompleteItems}>
        {items.map((film) => {
          return (
            <div
              onClick={() => openUrl(makeFilmUrl(film.id, film.title))}
              key={film.id}
            >
              {film.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
