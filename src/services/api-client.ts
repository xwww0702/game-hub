import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params :{
        key: '83a6879bf922489bb230c87c6054eb43'
    }
})