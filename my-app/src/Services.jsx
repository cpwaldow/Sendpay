import React, { Component } from 'react';

import './style/global.css';
import './style/main.css';

import bank from './img/bank.svg';
import clock from './img/clock.svg';
import mobilePhone from './img/mobile-phone.svg';
import truck from './img/truck-fast.svg';

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 className='servicesTitle'>We are giving Services</h3>
        <p className='serviceText'>Lorem ipsum dolor sit amet consectetur.</p>
        <section className='servicesContainer'>
          <section className='leftSide'>
            <section className='allServices'>
              <img src={bank} alt='banco' />
              <section>
                <h3>Bank Transfer</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  tempora
                </p>
              </section>
            </section>

            <section className='allServices'>
              <img src={mobilePhone} alt='mobilePhone' />
              <section>
                <h3>Mobile Recharge</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  tempora
                </p>
              </section>
            </section>
          </section>
          <section className='rightSide'>
            <section className='allServices'>
              <img src={clock} alt='clock' />
              <section>
                <h3>Fast Transfer</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  tempora
                </p>
              </section>
            </section>

            <section className='allServices'>
              <img src={truck} alt='truck' />
              <section>
                <h3>Easy and Fast</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  tempora
                </p>
              </section>
            </section>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
