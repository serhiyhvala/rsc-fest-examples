import styles from "./hit-counter.module.scss";
import { prisma } from "@/shared/db";
import { useState } from "react";
import clsx from "clsx";

export const HitCounter = async () => {
  const [censored, setCensored] = useState(true);

  const page = await prisma.page.update({
    where: {
      pageTitle: "First Page",
    },
    data: {
      viewsCount: { increment: 1 },
    },
  });

  return (
    <button
      onClick={() => setCensored(!censored)}
      className={clsx(styles.button, { [styles.censored]: censored })}
    >
      {page?.viewsCount}
    </button>
  );
};
