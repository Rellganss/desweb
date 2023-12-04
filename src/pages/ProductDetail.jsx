import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ProductDetail = () => {
    const { index } = useParams();

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
        <div>
            <Navbar/>

            <div className="w-full  flex mt-[120px] ml-[30px] mb-[30px]">
                <img className="w-1/3 h-auto object-cover"  src={cardData.imageUrl} alt="" />
                <div className="flex flex-col w-2/3 ml-[30px]">
                    <div className="title text-black mt-[120px] text-[30px]">{cardData.title}</div>
                    <div className="description text-black mt-[20px] text-[15px]">{cardData.description}</div>
                    <div className="text-black-700 mt-[20px] text-base">Rating: {cardData.rating.rate} ({cardData.rating.count} reviews)</div>
                    <div className="price text-black mt-[20px] text-[15px]">${cardData.price}</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
    
export default ProductDetail;
