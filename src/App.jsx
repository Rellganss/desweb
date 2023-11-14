import React from 'react';
import Navbar from './components/Navbar'; // Pastikan path-nya sesuai
import Footer from './components/Footer';
import CardList from './components/Cardlist';


const App = () => {
  const cardCount = 10; 
  return (
    <div>
      <Navbar />
      <CardList cardCount={cardCount} />
      <Footer />
    </div>
  );
}

export default App;
