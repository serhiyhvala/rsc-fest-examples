import styles from "../styles/product-card.module.scss";
import Image from "next/image";
import { FC } from "react";
import { Product } from "@prisma/client";

interface ProductCardPropsI {
  product?: Product;
  isLoading?: boolean;
}

export const ProductCard: FC<ProductCardPropsI> = ({ product, isLoading }) => {
  if (isLoading) {
    return <div className={styles.placeholder} />;
  }

  return (
    <div className={styles.card}>
      <Image
        src={product?.image_url as string}
        alt={product?.title as string}
        width={300}
        height={300}
      />
      <span>{product?.title}</span>
      <span>{product?.price}$</span>
    </div>
  );
};
