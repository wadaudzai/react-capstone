import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Coins from './components/Coins';
import CoinsInfo from './components/CoinsInfo';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Coins" element={<Coins />} />
          <Route path="/CoinsInfo" element={<CoinsInfo />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
