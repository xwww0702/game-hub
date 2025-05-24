import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
export interface Platform {
    id: number;
    name: string;
    slug: string;
}
const api = new apiClient<Platform>('/platforms/lists/parents')
// return useData<Platform>("/platforms/lists/parents")
const usePlatform = () => useQuery({
    queryKey:['platforms'],
    queryFn: api.getAll,
    staleTime: 24*60*60*1000,
})

export default usePlatform