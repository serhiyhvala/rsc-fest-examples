import { ProductCard } from "@/shared/ui/product-card";
import { categoryStyles } from "@/views/categories";

export default function Loading() {
  return (
    <div className={categoryStyles.container}>
      {Array.from({ length: 2 }).map((_, i) => (
        <ProductCard isLoading key={i} />
      ))}
    </div>
  );
}
