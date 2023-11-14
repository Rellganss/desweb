// CardList.js
import React from 'react';
import Card from './Card';

const CardList = ({ cardCount }) => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      {[...Array(cardCount)].map((_, index) => (
        <Card key={index} index={index + 1} />
      ))}
    </div>
  );
};

export default CardList;
