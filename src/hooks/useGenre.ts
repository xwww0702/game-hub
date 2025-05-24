import useGenres from "./useGenres";


const Genres = (id?:number)=>{
    const { data } = useGenres();
    return  data?.results.find((p) => p.id === id);
}

export default Genres