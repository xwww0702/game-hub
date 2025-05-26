import type { FetchResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import ms from "ms";
import useGameQueryStore from "@/store";
import type Game  from "../Entities/Game";
// useData<Game>("/games",{params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering:gameQuery.sortOrder, search:gameQuery.searchText}},[gameQuery]);
const api = new apiClient<Game>('/games')
const useGames = () =>{
    const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
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
    staleTime: ms('1d'), //24h
  });}
export default useGames