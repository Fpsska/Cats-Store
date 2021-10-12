import Header from "./Header";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  console.log("mapStateToProps: ", state.headerLinks)
  return {
    headerLinks: state.headerLinks,
  };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;