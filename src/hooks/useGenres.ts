import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import genres from "@/data/genres";
import ms from 'ms'
import type Genre  from "../Entities/Genre";
const api = new apiClient<Genre>('/genres')
// {data:genres,isLoading: false, error:null}
const useGenres = () =>  useQuery({
        queryKey:['genres'],
        queryFn:api.getAll,
        staleTime: ms('1d'),
        initialData: genres
    })

export default useGenres