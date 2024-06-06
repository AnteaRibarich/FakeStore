import React from "react";
import useCategories from "../hooks/useCategories";
import { Button, List, ListItem, Spinner, Text } from "@chakra-ui/react";

interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

const CategoryList = ({ selectedCategory, onSelectCategory }: Props) => {
  const { data: categories, error, isLoading } = useCategories();

  if (isLoading) return <Spinner />;
  if (error) return <Text>{error}</Text>;

  const renderCategoryButton = (category: string) => (
    <Button
      whiteSpace="normal"
      textAlign="left"
      fontWeight={category === selectedCategory ? "bold" : "normal"}
      onClick={() => onSelectCategory(category)}
      fontSize="lg"
      textTransform="capitalize"
      variant="link"
    >
      {category}
    </Button>
  );

  return (
    <List>
      <ListItem paddingY="5px" key="all">
        {renderCategoryButton("all")}
      </ListItem>
      {categories.map((category) => (
        <ListItem paddingY="5px" key={category}>
          {renderCategoryButton(category)}
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
