import styles from "./hit-counter.module.scss";
import { prisma } from "@/shared/db";

export const HitCounter = async () => {
  const page = await prisma.page.update({
    where: {
      pageTitle: "First Page",
    },
    data: {
      viewsCount: { increment: 1 },
    },
  });

  return <button className={styles.button}>{page?.viewsCount}</button>;
};
