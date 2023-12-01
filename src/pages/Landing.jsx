import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardList from '../components/Cardlist';


export default function Landing(){
  const cardCount = 20; 
  return (
    <div>
      <Navbar />
      <section className='content mt-16'>
        <CardList cardCount={cardCount} />
      </section>
      <Footer />
    </div>
  );
}

