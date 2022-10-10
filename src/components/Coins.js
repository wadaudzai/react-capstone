import React, { Component } from 'react';
import OneCoin from './OneCoin';
import '../styles/Coins.css';

export default class Coins extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Coins</h1>
        <OneCoin />
      </div>

    );
  }
}
