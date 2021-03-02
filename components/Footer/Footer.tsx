import * as React from "react";
import styles from "./styles.module.scss";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className={styles.image}>
      <img
        src="https://psv4.userapi.com/c532036/u79020654/docs/d27/cadff7cdd131/logo.png?extra=R_SGLhN_lG3pAisFkVOXznPrXEEoZZ2i3jHJu3YiM4-Xg4YoZ2rNNnhNW5252bZ0aJLu24hN5wDus9b6ptMk4VSbSJ6jJk_7yOFwISSWQi1pbEkQpTn2JtdSi1AFfOqZgiQ4SxA-XVIwCuwNiCc137I"
        alt="logo"
      />
    </footer>
  );
};
