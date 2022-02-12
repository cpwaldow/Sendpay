import React, { Component } from 'react';

import './style/main.css';
import phone from './img/celphone.svg';

class SendMoney extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='containerMain firstContent'>
          <section className='leftContent'>
            <h2 className='title'>Sending money is Easier than before</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellat, quae.
            </p>

            <a
              href='https://www.figma.com/file/EKwPg668Y6BTtZjses4HRi/website-lading-page-(Community)?node-id=0%3A1'
              className='btn registerMain'
              target='_blank'
              rel='noreferrer'
            >
              Register
            </a>
            <a
              href='https://www.figma.com/file/EKwPg668Y6BTtZjses4HRi/website-lading-page-(Community)?node-id=0%3A1'
              className='btn learnMore'
              target='_blank'
              rel='noreferrer'
            >
              learn more
            </a>
          </section>
          <img src={phone} alt='Celphone' className='phoneImg' />
        </section>
      </React.Fragment>
    );
  }
}

export default SendMoney;
