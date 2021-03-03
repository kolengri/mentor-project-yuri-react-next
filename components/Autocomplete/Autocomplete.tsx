import * as React from "react";
const classNames = require("classnames");
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
const IMAGE_PATH = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
const NOT_FOUND_IMAGE_PATH =
  "https://media.istockphoto.com/vectors/internet-error-page-not-found-in-vertical-orientation-for-mobile-a-vector-id1252582562?s=612x612";

type Films = Film[];

const makeFilmUrl = (id: number, title: string) => {
  const cleanTitle = title
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/ /g, "-")
    .toLowerCase();
  return `${IMDB_URL}${id}-${cleanTitle}`;
};

// const wait = async (ms:number) => {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
// })
// };

const useFindFilm = (filmName: string) => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<Films>([]);

  const fetchFilms = async () => {
    try {
      setLoading(true);
      // await wait(5000);
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
          // () => {
          if (templateType === "List") {
            // items.map((film) => {
            return (
              <div
                className={styles.filmDiv}
                onClick={() => openUrl(makeFilmUrl(film.id, film.title))}
                key={film.id}
              >
                {film.title}
              </div>
            );
            // });
          } else if (templateType === "Poster") {
            // items.slice(0, 2).map((film) => {
            return (
              <div
                className={classNames(styles.filmDiv, styles.posters)}
                onClick={() => openUrl(makeFilmUrl(film.id, film.title))}
                key={film.id}
              >
                <img
                  className={styles.filmPoster}
                  src={
                    film.poster_path
                      ? `${IMAGE_PATH}${film.poster_path}`
                      : `${NOT_FOUND_IMAGE_PATH}`
                  }
                  alt="film_poster"
                />
                <h4 className={styles.filmTitle}>{`${film.title}${""}`}</h4>
                <p className={styles.filmYear}>
                  {film.release_date
                    ? film.release_date.slice(0, 4)
                    : "unknown"}
                </p>
              </div>
            );
            // });
          }
          // }
        })}
      </div>
    </div>
  );
};
