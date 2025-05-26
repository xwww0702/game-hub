import type { ScreenShot } from "@/Entities/ScreenShot"
import apiClient from "@/services/api-client"
import { useQuery } from "@tanstack/react-query"

const useScreenShots = (gameId:number)=> {
    const ApiClient = new apiClient<ScreenShot>(`/games/${gameId}/screenshots`)
    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: ApiClient.getAll
    })
}

export default useScreenShots