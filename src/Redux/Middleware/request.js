import getDataAPI from '../../api/api'
import { fetchCards, fetchToggle } from '../../Redux/actions'

const requestHandler = () => {
    return dispatch => {
        getDataAPI()
            .then(async function (response) {
                setTimeout(() => {
                    dispatch(fetchToggle(true)) // preloader is active
                },1500)
                
                const responseData = await response.data.results
                const actualData = []
                await responseData.forEach(item => {
                    actualData.push(
                        {
                            id: item.id,
                            image: item.urls.small,
                            name: item.user.first_name,
                            location: item.user.location,
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
                dispatch(fetchCards(actualData))
            })
            .catch(error => console.log(error))
    }
}

export default requestHandler;

