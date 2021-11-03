import { getDataAPI } from '../../api/api'
import { getCatsCount, fetchCards, fetchToggle } from '../../Redux/actions'
import url from "../../assets/images/no_photo.png";

const requestHandler = () => {
    return dispatch => {
        getDataAPI()
            .then(async function (response) {
                setTimeout(() => {
                    dispatch(fetchToggle(true)) // preloader is active
                }, 1500)

                const responseData = await response.data
                const actualData = []

                await responseData.forEach(item => {
                    if (item["image"] === undefined) {  
                        const wrongItem = item
                        wrongItem.image = {url} 
                    }
                    if (Object.keys(item.image).length === 0 && item.image.constructor === Object) { 
                        const wrongItem = item
                        wrongItem.image = {url}
                    }
                    // /. response validation
                    actualData.push(
                        {
                            id: `${Math.random() + item.id}`,
                            image: item.image.url,
                            name: item.name,
                            location: item.origin,
                            paw: "4",
                            age: `${Math.floor(Math.random() * 12) + 1} мес.`,
                            price: `${Math.floor(Math.random() * 10000) + 1500} руб.`,
                            discount: `-${Math.floor(Math.random() * 60) + 10}%`,
                            discountStatus: Boolean(Math.round(Math.random())),
                            cardStatus: Boolean(Math.round(Math.random())),
                            isFavourite: false,
                            isLoadingImage: true
                        }
                    )
                })
                await dispatch(fetchCards(actualData))
                await dispatch(getCatsCount(response.headers["pagination-count"])) // get count of cats
            })
            .catch((error) => {
                console.error(error)
            })
    }
}

export default requestHandler;

