import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import { useState } from "react";
import ProductGrid from "./components/ProductGrid";
import NavBar from "./components/NavBar";
import CategoryList from "./components/CategoryList";
import SortSelector from "./components/SortSelector";

export interface ProductQuery {
  category: string;
  sortOrder: string;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>({
    category: "all",
    sortOrder: "desc",
  });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <CategoryList
            seletedCategory={productQuery.category}
            onSelectCategory={(category) =>
              setProductQuery({ ...productQuery, category })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2} marginBottom={5}>
          <SortSelector
            sortOrder={productQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setProductQuery({ ...productQuery, sortOrder })
            }
          />
        </Box>
        <ProductGrid productQuery={productQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
