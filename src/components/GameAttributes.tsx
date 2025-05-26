import type { Game } from "@/Entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import GameDetail from "./GameDetail";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <GameDetail term="platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameDetail>
      <GameDetail term="MetaScore">
        <CriticScore score={game.metacritic} />
      </GameDetail>
      <GameDetail term="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameDetail>
      <GameDetail term="Publishers">
        {game.publishers?.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </GameDetail>
    </SimpleGrid>
  );
};

export default GameAttributes;
