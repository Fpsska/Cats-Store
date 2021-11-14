import { connect } from "react-redux";
import {
  toggleIsFavourite,
  toggleSortCards,
  fetchToggle,
  changeScrollStatus
} from "../../../Redux/actions";
import MainPage from "./MainPage";
import GalleryPage from "../GalleryPage/GalleryPage";
import requestHandler from "../../../Redux/Middleware/request";
import burgerHandler from "../../../Redux/Middleware/burger";

const mapStateToProps = (state) => {
  return {
    headerLinks: state.mainPage.headerLinks,
    cards: state.mainPage.cards,
    sortButtons: state.mainPage.sortButtons,
    catsCount: state.mainPage.catsCount,
    isFetching: state.mainPage.isFetching,
    isBurgerHidden: state.mainPage.isBurgerHidden,
    isBodyScrolling: state.mainPage.isBodyScrolling
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSortCards: (id, status) => dispatch(toggleSortCards(id, status)),
    toggleIsFavourite: (id, status) => dispatch(toggleIsFavourite(id, status)),
    fetchToggle: (value) => dispatch(fetchToggle(value)),
    requestHandler: () => dispatch(requestHandler()),
    burgerHandler: () => dispatch(burgerHandler()),
    changeScrollStatus: (status) => dispatch(changeScrollStatus(status))
  };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainContainer;
