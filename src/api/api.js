import axios from 'axios'

const getDataAPI = () => {
    const page = Math.floor(Math.random() * 300) + 1
    console.log(page, typeof page);
    return axios.get(`https://api.unsplash.com/search/photos?client_id=TOZLUGwokWVsi10QIZKhtlHrLRvM3tzI9fuceZlRAP8&query=cat&content_filter=high&orientation=landscape&per_page=6&page=${page}`)
}

export default getDataAPI;