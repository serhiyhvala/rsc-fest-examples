"use client";

import clsx from "clsx";
import styles from "./censored.module.scss";
import { FC, useState } from "react";

interface CensoredPropsI {
  count: number;
}

export const Censored: FC<CensoredPropsI> = ({ count }) => {
  const [censored, setCensored] = useState(true);
  return (
    <button
      onClick={() => setCensored(!censored)}
      className={clsx(styles.button, { [styles.censored]: censored })}
    >
      {count}
    </button>
  );
};
