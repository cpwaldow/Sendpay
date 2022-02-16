import React, { Component } from 'react';

import './style/main.css';

import SendMoney from './SendMoney';
import HowItWorks from './HowItWorks';
import RealTime from './RealTime';
import Services from './Services';
import People from './People';

class Main extends Component {
  render() {
    return (
      <main>
        <SendMoney />
        <HowItWorks />
        <RealTime />
        <Services />
        <People />
      </main>
    );
  }
}

export default Main;
