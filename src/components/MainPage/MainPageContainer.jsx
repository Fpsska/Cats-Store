import { connect } from "react-redux";
import { toggleIsFavourite, changeGalleryDisplay, scrollTop } from "../../Redux/actions";
import Main from "./MainPage";

const mapStateToProps = (state) => {
  return {
    headerLinks: state.mainPage.headerLinks,
    cards: state.mainPage.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDisplay: () => dispatch(changeGalleryDisplay()),
    scroll: () => dispatch(scrollTop()),
    toggleIsFavourite: (value, id) => dispatch(toggleIsFavourite(value, id))
  };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
