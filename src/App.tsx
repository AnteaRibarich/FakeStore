import {
  Grid,
  GridItem,
  Show,
  Box,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import ProductGrid from "./components/ProductGrid";
import NavBar from "./components/NavBar";
import CategoryList from "./components/CategoryList";
import SortSelector from "./components/SortSelector";
import { Product } from "./hooks/useProducts";

export interface ProductQuery {
  category: string;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>({
    category: "all",
    sortOrder: "desc",
    searchText: "",
  });

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Check if product already exists in the cart
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const totalSum = cart.reduce((sum, product) => sum + product.price, 0);

  const cartArea = useBreakpointValue({ base: "2 / span 2", lg: "3 / span 1" });

  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "cart cart" "main main"`,
        lg: `"nav nav cart" "aside main cart"`,
      }}
      templateColumns={{
        base: "1fr 1fr",
        lg: "200px 1fr 300px",
      }}
      gap={4}
      p={4}
    >
      <GridItem area="nav" colSpan={2}>
        <NavBar
          onSearch={(searchText) =>
            setProductQuery({ ...productQuery, searchText })
          }
        />
      </GridItem>
      <GridItem area="cart" padding={5} gridColumn={cartArea} alignSelf="start">
        <VStack
          align="stretch"
          bg="gray.50"
          p={4}
          borderRadius="md"
          boxShadow="base"
        >
          <Heading size="md" mb={4}>
            Cart
          </Heading>
          {cart.map((product) => (
            <HStack key={product.id} justify="space-between">
              <Text>
                {product.title} - ${product.price}
              </Text>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => removeFromCart(product.id)}
              >
                x
              </Button>
            </HStack>
          ))}
          <Text fontWeight="bold" mt={4}>
            Total: ${totalSum.toFixed(2)}
          </Text>
        </VStack>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <CategoryList
            selectedCategory={productQuery.category}
            onSelectCategory={(category) =>
              setProductQuery({ ...productQuery, category })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX={2} marginBottom={5}>
          <SortSelector
            sortOrder={productQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setProductQuery({ ...productQuery, sortOrder })
            }
          />
        </Box>
        <ProductGrid productQuery={productQuery} addToCart={addToCart} />
      </GridItem>
    </Grid>
  );
}

export default App;
