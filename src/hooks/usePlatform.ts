import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import ms from "ms";
import type { Platform } from "../Entities/Platform";
const api = new apiClient<Platform>('/platforms/lists/parents')
// return useData<Platform>("/platforms/lists/parents")
const usePlatform = () => useQuery({
    queryKey:['platforms'],
    queryFn: api.getAll,
    staleTime: ms('1d'),
})

export default usePlatform