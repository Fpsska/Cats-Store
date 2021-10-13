import { connect } from "react-redux";
import Main from './MainPage'

const mapStateToProps = (state) => {
    return  {
        headerLinks: state.mainPage.headerLinks,
        cards: state.mainPage.cards
    }
}

const MainContainer = connect(mapStateToProps)(Main);

export default MainContainer;
