import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";
import RatingScore from "./RatingScore";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={product.image} />
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
