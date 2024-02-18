import { prisma } from "@/shared/api";
import styles from "../styles/categories.module.scss";
import { ActiveLink } from "@/shared/ui/active-link";

export const Categories = async () => {
  const categories = await prisma.category.findMany();

  return (
    <div className={styles.container}>
      <span>Categories</span>
      <ul>
        {categories.map((item) => (
          <li key={item.id}>
            <ActiveLink href={item.slug}>{item.title}</ActiveLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
