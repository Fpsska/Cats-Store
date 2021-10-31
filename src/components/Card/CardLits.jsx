import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = (props) => {
  const [cards, setCards] = useState(props.cards);
  useEffect(() => {
    setCards(props.cards);
  }, [props.cards]); // when state props.cards is changed

  const cardList = cards.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        image={item.image}
        name={item.name}
        location={item.location}
        age={item.age}
        paw={item.paw}
        price={item.price}
        discount={item.discount}
        isFavourite={item.isFavourite}
        cardStatus={item.cardStatus}
        discountStatus={item.discountStatus}
        isLoadingImage={item.isLoadingImage}
        toggleIsFavourite={props.toggleIsFavourite}
      />
    );
  });

  return <div className="gallery__wrapper">{cardList}</div>;
};

export default CardList;
