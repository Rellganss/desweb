import React from 'react';
import CardList from '../components/Cardlist';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function Landing(){
  const cardCount = 20; 
  return (
    <div>
      <Navbar />
      <section className='content mt-20'>
        <CardList cardCount={cardCount} />
      </section>
      <Footer />
    </div>
  );
}

