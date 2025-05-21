import type { Game, Platform } from "@/hooks/useGames";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import Platform_icon from "./Platform_icon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image_url";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <Platform_icon
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></Platform_icon>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
