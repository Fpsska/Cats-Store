import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const CardList = () => {
  const { cards } = useSelector((state) => state.mainPage);

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
      />
    );
  });

  return <div className="gallery__wrapper">{cardList}</div>;
};

export default CardList;
