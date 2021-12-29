import axios from "axios";


const api = axios.create({
    baseURL:"https://globalvale.sharepoint.com/teams/SSMA_RECFerrosos"
})

/* api.interceptors.request.use(async (config) => {
    try {
        const token = window.localStorage.getItem('token') !== null ? "" : window.localStorage.getItem('token')
        config.headers.auth = token
    } catch (error) {
        console.error(error)
    }
})
 */
export default api
