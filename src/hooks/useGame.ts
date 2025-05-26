import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
const apiclient = new apiClient<any>('/games')
const useGame = (slug: string) => useQuery({
    queryKey:['game',slug],
    queryFn: () => apiclient.get(slug)
})

export default useGame;