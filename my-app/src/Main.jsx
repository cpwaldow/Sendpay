import React, { Component } from 'react';

import './style/main.css';

import SendMoney from './SendMoney';
import HowItWorks from './HowItWorks';
import RealTime from './RealTime';

class Main extends Component {
  render() {
    return (
      <main>
        <SendMoney />
        <HowItWorks />
        <RealTime />
      </main>
    );
  }
}

export default Main;
