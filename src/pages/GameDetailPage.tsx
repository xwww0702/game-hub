import CriticScore from "@/components/CriticScore";
import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameDetail from "@/components/GameDetail";
import useGame from "@/hooks/useGame";
import { Heading, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  console.log("game", game);
  if (isLoading) return <div>Loading...</div>;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
