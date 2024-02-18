import { prisma } from "@/shared/api";
import { delay } from "@/shared/lib";
import styles from "../styles/comments.module.scss";

export const Comments = async () => {
  await delay(4000);
  const comments = await prisma.comments.findMany();

  return (
    <div className={styles.container}>
      {comments.map((item) => (
        <div key={item.id} className={styles.comment}>
          <span>{item.user_name}</span>
          <p>{item.comment}</p>
        </div>
      ))}
    </div>
  );
};
