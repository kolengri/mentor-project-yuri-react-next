import * as React from "react";
import styles from "./styles.module.scss";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className={styles.image}>
      <img
        src="https://psv4.userapi.com/c532036/u79020654/docs/d27/f88ce609cb89/logo.png?extra=xwpxevtsc7NvVZzmbHxFbVBF3GsAEHN5sWTdl2vOStzO3VHjMjGE_yDDDzO6QmjsCzoOsZWBnsj_qjagoWkjjDv_zslfzYb9S6vHkotz6WMfRwW0s_4NgXLHSIS4oJ3yQIiZY_U6RR6kkOrUJWuH6WA"
        alt="logo"
      />
    </footer>
  );
};
