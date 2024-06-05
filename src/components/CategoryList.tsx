import React from "react";
import useCategories from "../hooks/useCategories";
import { Button, List, ListItem, Text } from "@chakra-ui/react";

interface Props { 
  onSelectCategory: (category: string) => void;
  seletedCategory: string
}

const CategoryList = ({ seletedCategory, onSelectCategory }: Props) => {  
  const { data: categories, error, isLoading } = useCategories();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <List>
      <ListItem key='all' paddingY='5px'>
          <Button fontWeight={'all' === seletedCategory ? 'bold' : 'normal'} onClick={() => onSelectCategory('all')} fontSize='lg' textTransform={'capitalize'} variant='link'>All categories</Button>
      </ListItem>

    {categories.map((category) => (
      <ListItem key={category} paddingY='5px'>
          <Button fontWeight={category === seletedCategory ? 'bold' : 'normal'} onClick={() => onSelectCategory(category)} fontSize='lg' textTransform={'capitalize'} variant='link'>{category}</Button>
      </ListItem>
    ))}
    
    </List>
  );
};

export default CategoryList;
