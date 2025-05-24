import type { GameQuery } from "@/App";
import type { FetchResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
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
const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      api.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1, // ✅ 必须加这个！
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next?allPages.length + 1:undefined
    },
    staleTime: 24*60 * 60 * 1000, //24h
  });
export default useGames