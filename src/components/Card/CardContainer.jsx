import CardList from "./CardLits";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

const CardContainer = connect(mapStateToProps)(CardList);

export default CardContainer;
