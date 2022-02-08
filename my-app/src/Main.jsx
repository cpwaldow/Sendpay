import React, { Component } from 'react';

import './style/main.css';
import phone from './img/celphone.svg';

class Main extends Component {
  render() {
    return (
      <main className='container'>
        <section className='leftContent'>
          <h2 className='title'>Sending money is Easier than before</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
            quae.
          </p>

          <a href='#' className='btn registerMain'>
            Register
          </a>
          <a href='#' className='btn learnMore'>
            learn more
          </a>
        </section>
        <section>
          <img src={phone} alt='Celphone' className='phone' />
        </section>
      </main>
    );
  }
}

export default Main;
