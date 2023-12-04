import React from 'react';
import CardList from '../components/Cardlist';
import Footer from '../components/Footer';
import NavbarBaru from '../components/NavbarBaru';

export default function Landing(){
  const cardCount = 20; 
  return (
    <div className="w-full">
      <NavbarBaru />
      <section className='content mt-[100px] mb-[20px]  '>
        <CardList cardCount={cardCount} />
      </section>
      <Footer />
    </div>
  );
}

