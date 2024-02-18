import { prisma } from "@/shared/api";
import { FC } from "react";
import styles from "../styles/categories.module.scss";
import { ProductCard } from "@/shared/ui/product-card";

interface CategoryPagePropsI {
  categorySlug: string;
}

export const CategoryPage: FC<CategoryPagePropsI> = async ({
  categorySlug,
}) => {
  const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

  await delay();

  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: `/${categorySlug}`,
      },
    },
  });

  return (
    <div className={styles.container}>
      {products.map((item) => (
        <ProductCard key={item.id} product={{ ...item }} />
      ))}
    </div>
  );
};
