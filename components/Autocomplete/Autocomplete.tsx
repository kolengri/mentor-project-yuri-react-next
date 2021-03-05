import * as React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Film } from "../../models";
import { findFilm } from "../../api/findFilms";
import * as templates from "./templates";

export type AutocompleteListTemplate = keyof typeof templates;

export type AutocompleteProps = {
  filmName: string;
  templateType: AutocompleteListTemplate;
};

type Films = Film[];

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
      const timeout = setTimeout(() => fetchFilms(), 700);
      return () => clearTimeout(timeout);
    }
  }, [filmName]);

  return { items, loading, error };
};

export const Autocomplete: React.FC<AutocompleteProps> = (props) => {
  const { templateType, filmName } = props;
  const { items, loading, error } = useFindFilm(filmName);
  const Template = templates[templateType];

  const films = templateType === "Poster" ? items.slice(0, 3) : items;

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
      <div
        className={classNames(styles.autocompleteItems, {
          [styles.posters]: templateType === "Poster",
        })}
      >
        {films.map((film) => (
          <Template {...film} key={film.id} />
        ))}
      </div>
    </div>
  );
};
