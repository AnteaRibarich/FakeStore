import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";
import RatingScore from "./RatingScore";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="200px" // Set a fixed height for the container
        overflow="hidden"
      >
        <Image
          src={product.image}
          width="75%"
          height="75%"
          objectFit="contain"
          alt={product.title}
        />
      </Box>
      <CardBody>
        <Heading fontSize="2xl">{product.title}</Heading>
        <HStack justifyContent="space-between">
          <Text>cijena</Text>
          <RatingScore rating={product.rating} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
