import axios from 'axios'

const getDataAPI = () => {
    return axios.get("https://api.unsplash.com/search/photos?client_id=s2GM1rvHUPqoYeTrc51b7u1EMdP2JxLretv0z8q26k0&query=cat&orientation=landscape&content_filter=high&per_page=6&page=1")
}

export default getDataAPI;