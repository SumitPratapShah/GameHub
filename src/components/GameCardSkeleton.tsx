import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} width="300px" overflow={"hidden"}>
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
