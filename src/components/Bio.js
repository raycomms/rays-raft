import React from "react";
import styles from "./Bio.module.css";

const Bio = ({ config, expanded }) => (
  <>
    <img
      className={styles.avatar}
      src={config.userAvatar}
      alt={config.userName}
    />
    <p>
      Written by <strong>{config.userName}</strong> who lives and works in
      California building useful things.
      {` `}
    </p>
  </>
);

export default Bio;
