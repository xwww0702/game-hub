import useGenre from "@/hooks/useGenre";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatforms(platformId);
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
