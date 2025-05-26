import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type  Game  from "../Entities/Game";
const apiclient = new apiClient<Game>('/games')
const useGame = (slug: string) => useQuery({
    queryKey:['game',slug],
    queryFn: () => apiclient.get(slug)
})

export default useGame;