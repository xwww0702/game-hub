import type { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre();
  const platform = usePlatforms(gameQuery.platformId);
  const heading = `
    ${platform?.name || ""} ${genre?.name || ""} Games
    `;
  return (
    <Heading marginLeft={2} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
