import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "@/services/api-client";
import apiClient from "@/services/api-client";
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// return useData<Platform>("/platforms/lists/parents")
const usePlatform = () => useQuery({
    queryKey:['platforms'],
    queryFn: ()=>apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res=>res.data),
    staleTime: 24*60*60*1000,
})

export default usePlatform