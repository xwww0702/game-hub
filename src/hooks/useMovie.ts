import type Movie from "@/Entities/Movie";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useMovie = (gameId: number) =>{
    const ApiClient = new apiClient<Movie>(`/games/${gameId}/movies`);
return useQuery({
    queryKey:['movies',gameId],
    queryFn:ApiClient.getAll,
})
} 


export default useMovie;