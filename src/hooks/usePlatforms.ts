import usePlatform from "./usePlatform";


const useFindName = (id?:number)=>{
    const { data } = usePlatform();
    return  data?.results.find((p) => p.id === id);
}

export default useFindName