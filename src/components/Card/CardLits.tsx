import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { RootState } from "../../Redux/store";

const CardList: React.FC = () => {
  const { cards } = useSelector((state: RootState) => state.cardReducer);

  const cardList = useMemo(
    () =>
      cards.map((item) => {
        console.log(item);
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
          />
        );
      }),
    [cards]
  );

  return <div className="gallery__wrapper">{cardList}</div>;
};

export default CardList;
