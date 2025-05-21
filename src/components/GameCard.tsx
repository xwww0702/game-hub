import type { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root width="320px" borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
