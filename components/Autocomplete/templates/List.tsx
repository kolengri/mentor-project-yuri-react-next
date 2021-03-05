import * as React from "react";
import styles from "../styles.module.scss";

import { makeFilmURL, externalURL } from "../../../utils";
import { Film } from "../../../models";

export type ListProps = {} & Film;

export const List: React.FC<ListProps> = (props) => {
  const { id, title, vote_average } = props;
  const rating = vote_average.toFixed(1);
  const itemTitle = `${title} (${rating})`;

  return (
    <div
      className={styles.filmDiv}
      onClick={() => externalURL(makeFilmURL(id, title))}
      key={id}
    >
      {itemTitle}
    </div>
  );
};
