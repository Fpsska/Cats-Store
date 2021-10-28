import getDataAPI from '../../api/api'
import fetchCards from '../../Redux/actions'


const requestHandler = () => {
    return dispatch => {
        getDataAPI()
            .then(response => {
                const responseData = response.data.results
                console.log("from request.js: ", responseData);

                const actualData = []

                responseData.forEach(item => {
                    actualData.push(
                        {
                            id: item.id,
                            image: item.urls.small,
                            name: item.user.first_name,
                            location: item.user.location,
                            paw: "4",
                            age: `${Math.floor(Math.random() * 12) + 1} мес.`,
                            price: `${Math.floor(Math.random() * 10000) + 1500} руб.`,
                            discount: `-${Math.floor(Math.random() * 60)}%`,
                            discountStatus: Boolean(Math.round(Math.random())),
                            isFavourite: false,
                            cardStatus: false
                        }
                    )
                })
                console.log("actualData:", actualData);
                dispatch(fetchCards(actualData))
            })
            .catch(error => console.log(error))
    }
}

export default requestHandler;

