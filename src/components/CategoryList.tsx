import React from "react";
import useCategories from "../hooks/useCategories";

const CategoryList = () => {
  const { categories, error } = useCategories();

  if (error) return <div>{error}</div>;

  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
