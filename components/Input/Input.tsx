import * as React from "react";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-gg/search";

import styles from "./styles.module.scss";
import { Autocomplete, AutocompleteListTemplate } from "../../components";

export type InputProps = {};

export const Input: React.FC<InputProps> = (props) => {
  const [filmName, setFilmName] = React.useState("");
  const [template, setTemplate] = React.useState<AutocompleteListTemplate>(
    "Poster"
  );

  return (
    <div className={styles.container}>
      <div className={styles.container__input}>
        <Icon className={styles.iconify} icon={searchIcon} />
        <input
          className={styles.query}
          placeholder="start typing..."
          onChange={(event) => setFilmName(event.target.value)}
          value={filmName}
        />
        <div className={styles.radio}>
          <div>
            <label>
              List
              <input
                className={styles.radioInput}
                checked={template === "List"}
                type="radio"
                onChange={() => setTemplate("List")}
                name="type"
                value="List"
              />
            </label>
          </div>
          <div>
            <label>
              Posters
              <input
                className={styles.radioInput}
                checked={template === "Poster"}
                type="radio"
                onChange={() => setTemplate("Poster")}
                name="type"
                value="Posters"
              />
            </label>
          </div>
        </div>
        <Autocomplete filmName={filmName} templateType={template} />
      </div>
    </div>
  );
};
