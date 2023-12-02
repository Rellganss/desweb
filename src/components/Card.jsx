// Card.js
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Card = ({ index, showDetail }) => {
  const [cardData, setCardData] = useState({
    title: '',
    description: '',
    imageUrl: `https://via.placeholder.com/150?text=Card+${index}`,
    rating: { rate: 0, count: 0 },
    price: 0,
  });

  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        const product = data[index - 1];

        setCardData({
          title: product.title,
          description: product.description,
          imageUrl: product.image || `https://via.placeholder.com/150?text=Card+${index}`,
          rating: product.rating,
          price: product.price,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [index]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Link to={`/ProductDetail/${index}`} className="text-black hover:text-gray-300">
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 h-[450px] cursor-pointer" >
      <img className="w-full h-64 object-cover" src={cardData.imageUrl} alt={`Card ${index}`} />
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2">{cardData.title}</div>
        <p className="text-gray-700 text-base">
          {showFullDescription ? cardData.description : `${cardData.description.slice(0, 100)}...`}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleDescription}
          >
            {showFullDescription ? ' Show less' : ' Show more'}
          </span>
        </p>
        <p className="text-gray-700 text-base">Price: ${cardData.price}</p>
        <p className="text-gray-700 text-base">Rating: {cardData.rating.rate} ({cardData.rating.count} reviews)</p>
      </div>
    </div>
    </Link>
  );
};

export default Card;
