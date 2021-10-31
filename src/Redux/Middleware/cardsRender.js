// import getMoreCards from '../actions'

// const cardsRender = (sliceActualData, visibleCards, status = "") => {

//     return dispatch => {
//         if (sliceActualData !== undefined) {
//             if (status === "restart" || visibleCards.length === 0) {
//                 dispatch(getMoreCards(sliceActualData[0]))  // to action creator
//             } else {
//                 const visibleCardsParts = visibleCards.length / 6
//                 let newVisibleCards = [...visibleCards]
//                 newVisibleCards.concat(sliceActualData[visibleCardsParts])
//                 dispatch(getMoreCards(newVisibleCards)) // to action creator
//             }
//         }

//     }
// }

// export default cardsRender;