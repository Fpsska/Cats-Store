import { connect } from "react-redux";
import {
  toggleIsFavourite,
  toggleSortCards,
  // changeGalleryDisplay,
} from "../../Redux/actions";
import Main from "./MainPage";

const mapStateToProps = (state) => {
  return {
    headerLinks: state.mainPage.headerLinks,
    cards: state.mainPage.cards,
    sortButtons: state.mainPage.sortButtons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // changeDisplay: () => dispatch(changeGalleryDisplay()),
    toggleSortCards: (id) => dispatch(toggleSortCards(id)),
    toggleIsFavourite: (value, id) => dispatch(toggleIsFavourite(value, id)),
  };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
