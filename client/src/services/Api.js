import store from '@/store'
import axios from 'axios'

export default () => {
    return axios.create({
        baseURL : 'http://localhost:8081',
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }
    })
}

