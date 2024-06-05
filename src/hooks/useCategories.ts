import useData from "./useData";

const useCategories = () => useData<string>('/products/categories');

export default useCategories;
