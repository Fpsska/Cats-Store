import getDataAPI from '../../api/api'
import { getCatsCount, fetchCards, fetchToggle } from '../../Redux/actions'

const requestHandler = () => {
    return dispatch => {
        getDataAPI()
            .then(async function (response) {
                setTimeout(() => {
                    dispatch(fetchToggle(true)) // preloader is active
                }, 1500)

                const responseData = await response.data
                console.log(response);
                const actualData = []
                await responseData.forEach(item => {
                    actualData.push(
                        {
                            id: item.id,
                            image: "",
                            name: item.name,
                            location: item.origin,
                            paw: "4",
                            age: `${Math.floor(Math.random() * 12) + 1} мес.`,
                            price: `${Math.floor(Math.random() * 10000) + 1500} руб.`,
                            discount: `-${Math.floor(Math.random() * 60) + 10}%`,
                            discountStatus: Boolean(Math.round(Math.random())),
                            cardStatus: Boolean(Math.round(Math.random())),
                            isFavourite: false,
                            isLoadingImage: false
                        }
                    )
                })
                await dispatch(fetchCards(actualData))
                await dispatch(getCatsCount(response.headers["pagination-count"])) // get count of cats
            })
            .catch(error => console.error(error))
    }
}

export default requestHandler;

