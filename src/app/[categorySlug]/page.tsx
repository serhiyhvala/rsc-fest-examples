import { CategoryPage } from "@/views/categories";

interface CategoryPagePropsI {
  params: {
    categorySlug: string;
  };
}

export default function Category({ params }: CategoryPagePropsI) {
  const { categorySlug } = params;

  return <CategoryPage categorySlug={categorySlug} />;
}
