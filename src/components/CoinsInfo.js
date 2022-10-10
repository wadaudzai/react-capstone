import React, { Component } from 'react';
import OneInfo from './OneInfo';
import '../styles/CoinsInfo.css';

export default class CoinsInfo extends Component {
  render() {
    return (
      <div>
        <h2 className="title-info">CoinsInfo</h2>
        <OneInfo />
      </div>
    );
  }
}
