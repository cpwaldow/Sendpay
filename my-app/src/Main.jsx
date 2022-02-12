import React, { Component } from 'react';

import './style/main.css';

import SendMoney from './SendMoney';

class Main extends Component {
  render() {
    return (
      <main className='container'>
        <SendMoney />
      </main>
    );
  }
}

export default Main;
