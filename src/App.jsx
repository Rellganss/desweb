import React from 'react';
import Navbar from './components/Navbar'; // Pastikan path-nya sesuai
import Footer from './components/Footer';
import CardList from './components/Cardlist';
import Login from './pages/Login';


const App = () => {
  const cardCount = 10; 
  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
