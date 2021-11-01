import axios from 'axios'

const getDataAPI = () => {
    const page = Math.floor(Math.random() * 50) + 1
    return axios.get(`https://api.thecatapi.com/v1/breeds?per_page=${page}&limit=6`)
}

export default getDataAPI;