import React, { Component } from 'react';

import './style/global.css';
import './style/main.css';

import carta from './img/carta.svg';
import flor from './img/flor.svg';
import carroEntrega from './img/carroEntrega.svg';

class HowItWorks extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='secoundCountent'>
          <h3 className='howItWorks'>How it Works</h3>
          <p className='howItWorksFirstText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere
            pariatur maxime consequuntur sint animi.
          </p>
          <section className='container'>
            <section>
              <img src={carta} alt='carta' className='HiwImg' />
              <h3 className='HiwTitle'>In-app transer</h3>
              <p className='HiwText'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum, deleniti!
              </p>
            </section>
            <section>
              <img src={flor} alt='flor' className='HiwImg' />
              <h3 className='HiwTitle'>In-app transer</h3>
              <p className='HiwText'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum, deleniti!
              </p>
            </section>
            <section>
              <img src={carroEntrega} alt='carro Entrega' className='HiwImg' />
              <h3 className='HiwTitle'>In-app transer</h3>
              <p className='HiwText'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum, deleniti!
              </p>
            </section>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default HowItWorks;
