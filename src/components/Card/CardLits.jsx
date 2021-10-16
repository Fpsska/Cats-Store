import React from "react";
import Card from "./Card";

const CardList = (props) => {
  const cardList = props.cards.map(item => {
    return (
      <Card
        key={item.id}
        id={item.id}
        image={item.image}
        name={item.name}
        color={item.color}
        age={item.age}
        paw={item.paw}
        price={item.price}
        discount={item.discount}
        status={item.status}
        isFavourite={item.isFavourite}
        changeStatus={props.changeStatus}
        toggleIsFavourite={props.toggleIsFavourite}
      />
    );
  });
  return <div className="gallery__wrapper">{cardList}</div>;
};

export default CardList;
