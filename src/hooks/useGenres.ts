import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import type { FetchResponse } from "@/services/api-client";
import genres from "@/data/genres";
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
const api = new apiClient<Genre>('/genres')
// {data:genres,isLoading: false, error:null}
const useGenres = () =>  useQuery({
        queryKey:['genres'],
        queryFn:api.getAll,
        staleTime: 24*60*60*1000,
        initialData: {count:genres.length,results:genres}
    })

export default useGenres