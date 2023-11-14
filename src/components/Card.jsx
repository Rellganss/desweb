// Card.js
import React from 'react';

const Card = ({ index }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src={`https://via.placeholder.com/300?text=Card+${index}`}
        alt={`Card ${index}`}
      />
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Card;
