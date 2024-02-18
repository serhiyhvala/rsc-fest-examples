import Link from "next/link";
import styles from "../styles/header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Nike shoes</Link>
    </header>
  );
};
