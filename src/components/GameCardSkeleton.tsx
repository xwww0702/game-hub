import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px"></Skeleton>
      <Card.Body>
        <SkeletonText noOfLines={3} gap="4" />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
