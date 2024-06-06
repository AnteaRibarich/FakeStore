import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";
import RatingScore from "./RatingScore";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
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
      <CardBody>
        <Stack spacing={3}>
          <Heading fontSize="xl" noOfLines={2}>
            {product.title}
          </Heading>
          <HStack justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">
              ${product.price}
            </Text>
            <RatingScore rating={product.rating} />
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
