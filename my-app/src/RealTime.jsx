import React, { Component } from 'react';

import './style/global.css';
import './style/main.css';

import man from './img/man.svg';

class RealTime extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='container realTimeContainer'>
          <img src={man} alt='homem' className='manImg' />
          <section className='realTimeSection'>
            <h3>Real-time Currency balance check</h3>
            <p className='realTimeText'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
              quis!
            </p>
            <a
              href='https://www.figma.com/file/EKwPg668Y6BTtZjses4HRi/website-lading-page-(Community)?node-id=1%3A2'
              className='readMore'
            >
              Read more {'>'}
            </a>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default RealTime;
