import React, { Component } from 'react';

import './style/main.css';

import SendMoney from './SendMoney';
import HowItWorks from './HowItWorks';

class Main extends Component {
  render() {
    return (
      <main>
        <SendMoney />
        <HowItWorks />
      </main>
    );
  }
}

export default Main;
