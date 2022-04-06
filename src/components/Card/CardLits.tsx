import React, { useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { RootState } from "../../Redux/store";
import { actualDataTypes } from "../../Types/cardType"


const CardList: React.FC = () => {
  const { cards, likedCardsData, filteredCardsData, isDataFiltered } = useSelector((state: RootState) => state.cardReducer);
  const { isHomePage, isOverviewPage } = useSelector((state: RootState) => state.headerReducer);
  const [list, setList] = useState<actualDataTypes[]>([])
  // 
  useEffect(() => {
    isHomePage ? setList(cards) : setList(likedCardsData)
  }, [cards, likedCardsData, isHomePage])

  // useEffect(() => {
  //   if (isOverviewPage === true && isDataFiltered === true) {
  //     setList(filteredCardsData)
  //   }
  // }, [isOverviewPage, isDataFiltered])
  // 
  const cardList = useMemo(
    () =>
      list.map((item) => {
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
    [list]
  );

  return <div className="gallery__cards">{cardList}</div>;
};

export default CardList;
