import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Coins from './components/Coins';
import CoinsInfo from './components/CoinsInfo';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/Coins" element={<Coins />} />
      <Route path="/CoinsInfo" element={<CoinsInfo />} />
    </Routes>
  </BrowserRouter>
);

export default App;
