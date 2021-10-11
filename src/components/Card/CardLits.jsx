import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const CardList = (props) => {
  const cardList = props.cards.map(item => {
    return (
      <Card
        key={item.id}
        image={item.image}
        name={item.name}
        color={item.color}
        age={item.age}
        paw={item.paw}
        price={item.price}
        discount={item.discount}
      />
    );
  });
  return <div className="gallery__wrapper">{cardList}</div>;
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(CardList);
