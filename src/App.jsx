import React from 'react';
import Navbar from './components/Navbar'; // Pastikan path-nya sesuai
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Konten lainnya */}
      <Footer />
    </div>
  );
}

export default App;
