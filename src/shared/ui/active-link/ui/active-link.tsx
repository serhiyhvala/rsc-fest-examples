"use client";

import { FC, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "../styles/active-link.module.scss";

interface ActiveLinkPropsI extends LinkProps {
  children: ReactNode;
}

export const ActiveLink: FC<ActiveLinkPropsI> = ({ children, ...props }) => {
  const pathName = usePathname();

  return (
    <Link
      {...props}
      className={clsx(styles.link, {
        [styles.active]: pathName === props.href,
      })}
    >
      {children}
    </Link>
  );
};
