import { connect } from "react-redux";
import { toggleIsFavourite, toggleSortCards } from "../../Redux/actions";
import Main from "./MainPage";
import requestHandler from "../../Redux/Middleware/request";

const mapStateToProps = (state) => {
  return {
    headerLinks: state.mainPage.headerLinks,
    cards: state.mainPage.cards,
    sortButtons: state.mainPage.sortButtons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSortCards: (id) => dispatch(toggleSortCards(id)),
    toggleIsFavourite: (value, id) => dispatch(toggleIsFavourite(value, id)),
    requestHandler: () => dispatch(requestHandler()),
  };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
