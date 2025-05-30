import {create} from 'zustand'
export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
  page?: number;
}
interface GameQueryStore {
    gameQuery:GameQuery
    setSearchText:(text:string)=>void,
    setGenre:(genreId:number)=>void,
    setPlatform:(platformId:number)=>void,
    setOrder:(order:string)=>void,
}
const useGameQueryStore = create<GameQueryStore>(set=>({
    gameQuery:{},
    setSearchText:(text)=>set(()=>({gameQuery:{searchText:text}})),
    setGenre:(genreId)=>set((store)=>({gameQuery:{...store.gameQuery,genreId:genreId}})),
    setPlatform:(platformId)=>set((store)=>({gameQuery:{...store.gameQuery,platformId:platformId}})),
    setOrder:(order)=>set((store)=>({gameQuery:{...store.gameQuery,sortOrder:order}})),
}))


export default useGameQueryStore