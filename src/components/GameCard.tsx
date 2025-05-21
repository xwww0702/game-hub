import type { Game, Platform } from "@/hooks/useGames";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import Platform_icon from "./Platform_icon";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root width="320px" borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <HStack justifyContent="space-between">
          <Platform_icon
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></Platform_icon>
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
