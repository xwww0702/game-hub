import type Platform  from "@/Entities/Platform";
import type Genre from "./Genre";
import type Publisher  from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
  genres:Genre[],
  publishers: Publisher[];
}
