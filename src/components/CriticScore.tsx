import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge fontSize="14px" padding={2} borderRadius="4px" colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
