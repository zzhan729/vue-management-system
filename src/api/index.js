import axios from "axios"
import base from './base'
const api = {
    getGoodsList(params) {//{page:xx}
        return axios.get(base.goodsList, {
            params
        })
    },
    getSearch(params){
        return axios.get(base.search,{params})
    }
}

export default api