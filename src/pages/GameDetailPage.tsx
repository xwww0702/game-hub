import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameTraliers from "@/components/GameTraliers";
import ScreenShots from "@/components/ScreenShots";
import useGame from "@/hooks/useGame";
import { SimpleGrid, Heading, GridItem, Grid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <div>Loading...</div>;
  if (error || !game) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTraliers gameId={game.id} />
          <ScreenShots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
