import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";
import RatingScore from "./RatingScore";

interface Props {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard = ({ product, addToCart }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" boxShadow="md">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="200px"
        bg="gray.100"
        overflow="hidden"
      >
        <Image
          src={product.image}
          maxWidth="100%"
          maxHeight="100%"
          objectFit="contain"
          alt={product.title}
        />
      </Box>
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box flex="1">
          <Heading fontSize="xl" noOfLines={2}>
            {product.title}
          </Heading>
        </Box>
        <HStack justifyContent="space-between" marginTop={3}>
          <Text fontSize="lg" fontWeight="bold">
            ${product.price}
          </Text>
          <RatingScore rating={product.rating} />
        </HStack>
        <Button marginTop={4} onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
