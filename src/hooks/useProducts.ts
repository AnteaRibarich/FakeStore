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

const useProducts = (selectedCategory: string | null) => {
  const endpoint = selectedCategory && selectedCategory != 'all' ? `/products/category/${selectedCategory}` : "/products";
  return useData<Product>(endpoint, {}, [selectedCategory]);
};

export default useProducts;
