import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { ProductQuery } from "../App";
import { Product } from "../hooks/useProducts";

interface Props {
  productQuery: ProductQuery;
  addToCart: (product: Product) => void;
}

const ProductGrid = ({ productQuery, addToCart }: Props) => {
  const { data = [], error, isLoading } = useProducts(productQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => <ProductCardSkeleton key={skeleton} />)}
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
