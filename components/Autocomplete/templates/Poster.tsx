import * as React from "react";
import classNames from "classnames";
import styles from "../styles.module.scss";
import { makeFilmURL, externalURL } from "../../../utils";
import { Film } from "../../../models";
import { IMAGE_PATH, NOT_FOUND_IMAGE_PATH } from "../../../configs/env";

export type PostersProps = {} & Film;

export const Poster: React.FC<PostersProps> = (props) => {
  const { id, title, poster_path, release_date } = props;
  return (
    <>
      <div
        className={classNames(styles.filmDiv, styles.postersDiv)}
        onClick={() => externalURL(makeFilmURL(id, title))}
        key={id}
      >
        <img
          className={styles.filmPoster}
          src={
            poster_path ? `${IMAGE_PATH}${poster_path}` : NOT_FOUND_IMAGE_PATH
          }
          alt="film_poster"
        />
        <h4 className={styles.filmTitle}>{`${title} `}</h4>
        <p className={styles.filmYear}>
          {release_date ? release_date.slice(0, 4) : "unknown"}
        </p>
      </div>
      ;
    </>
  );
};
