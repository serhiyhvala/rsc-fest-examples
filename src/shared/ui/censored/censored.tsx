"use client";

import clsx from "clsx";
import styles from "./censored.module.scss";
import { FC, ReactNode, useState } from "react";

interface CensoredPropsI {
  children: ReactNode;
}

export const Censored: FC<CensoredPropsI> = ({ children }) => {
  const [censored, setCensored] = useState(true);
  return (
    <button
      onClick={() => setCensored(!censored)}
      className={clsx(styles.button, { [styles.censored]: censored })}
    >
      {children}
    </button>
  );
};
