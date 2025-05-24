import type { GameQuery } from "@/App";
import type { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import type { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic:number;
  rating_top: number;
}
// useData<Game>("/games",{params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering:gameQuery.sortOrder, search:gameQuery.searchText}},[gameQuery]);
const api = new apiClient<Game>('/games')
const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey:['games',gameQuery],
  queryFn: ()=>api.getAll({params: {genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id, ordering:gameQuery.sortOrder, search:gameQuery.searchText}}),
  staleTime: 1*60*60*1000 
})

export default useGames