import axios from 'axios'

export const getDataAPI = () => {
    const page = Math.floor(Math.random() * 10)
    return axios.get(`https://api.thecatapi.com/v1/breeds?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=6&page=${page}`)
}

export default getDataAPI;