import { ProductQuery } from "../App";
import useData from "./useData";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating
}

export interface Rating {
  rate: number;
}

const useProducts = (productQuery: ProductQuery) => {
  const endpoint = productQuery.category !== "all" ? `/products/category/${productQuery.category}` : "/products";
  const { data, error, isLoading } = useData<Product>(endpoint, {}, [productQuery]);

  // Sort products by price if sortOrder is specified
  const sortedData = data.sort((a, b) => {
    if (productQuery.sortOrder === "price-asc") {
      return a.price - b.price;
    } else if (productQuery.sortOrder === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return { data: sortedData, error, isLoading };
};

export default useProducts;
