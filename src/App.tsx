import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import ProductGrid from "./components/ProductGrid";
import NavBar from "./components/NavBar";
import CategoryList from "./components/CategoryList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}

      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <CategoryList seletedCategory={selectedCategory} onSelectCategory={(category) => setSelectedCategory(category)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <ProductGrid selectedCategory={selectedCategory}/>
      </GridItem>
    </Grid>
  );
}

export default App;
