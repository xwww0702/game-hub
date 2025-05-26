
import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
    next:string|null,
}

// export default axios.create({
//     baseURL: 'https://api.rawg.io/api',
//     params :{
//         key: '83a6879bf922489bb230c87c6054eb43'
//     }
// })

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params :{
        key: '83a6879bf922489bb230c87c6054eb43'
    }
})

export class apiClient<T> {
    endpoint:string
    constructor(endpoint:string){
        this.endpoint=endpoint
    }
    getAll=(config:AxiosRequestConfig)=>
        axiosInstance
        .get<FetchResponse<T>>(this.endpoint,config)
        .then(res=>res.data)

    get=(id: number|string)=>{
        return axiosInstance.get<T>(this.endpoint+ '/'+id).then(res=>res.data)
    }

}
export default apiClient