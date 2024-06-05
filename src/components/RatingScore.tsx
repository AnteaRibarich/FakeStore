import { Badge } from "@chakra-ui/react";
import { Rating } from "../hooks/useProducts";

interface Props {
  rating: Rating;
}

const RatingScore = ({ rating }: Props) => {
  let color = rating.rate > 3.5 ? "green" : rating.rate > 2 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {rating.rate}
    </Badge>
  );
};

export default RatingScore;
