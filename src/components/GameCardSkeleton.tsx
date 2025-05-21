import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="320px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px"></Skeleton>
      <Card.Body>
        <SkeletonText noOfLines={3} gap="4" />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
