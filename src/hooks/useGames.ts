import useData from "./useData";
import type { Genre } from "./useGenres";
export interface Platform {
  id: number;
  name: string;
  slug: string;
  }

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic:number;
}


const useGames = (selectedGenre: Genre|null, seletedPlatform: Platform|null) => useData<Game>("/games",{params: {genres: selectedGenre?.id, platforms: seletedPlatform?.id}},[selectedGenre?.id,seletedPlatform?.id]);

export default useGames