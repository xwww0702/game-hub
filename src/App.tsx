import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
  page: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setGameQuery({ ...gameQuery, searchText: searchText })
          }
        />
      </GridItem>
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList
          onSelectGenre={(genre) => {
            setGameQuery({ ...gameQuery, genreId: genre.id });
          }}
          selecedGenre={gameQuery.genreId || null}
        />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack gap={5} paddingY={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
              selectedPlatform={gameQuery.platformId}
            ></PlatformSelector>
            <SortSelector
              onSelectSortOrder={(sortOder) =>
                setGameQuery({ ...gameQuery, sortOrder: sortOder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            ></SortSelector>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
