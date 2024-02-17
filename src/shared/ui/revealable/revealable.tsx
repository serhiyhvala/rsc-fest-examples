"use client";

import { FC, ReactNode, useState } from "react";
import styles from "./revealable.module.scss";

interface RevealablePropsI {
  children: ReactNode;
}

export const Revealable: FC<RevealablePropsI> = ({ children }) => {
  const [visible, setIsVisible] = useState(false);

  if (!visible) {
    return (
      <button onClick={() => setIsVisible(true)} className={styles.button}>
        Show me Code
      </button>
    );
  }

  return <>{children}</>;
};
