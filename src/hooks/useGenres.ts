import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import genres from "@/data/genres";
import ms from 'ms'
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
        staleTime: ms('1d'),
        initialData: genres
    })

export default useGenres