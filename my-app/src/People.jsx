import React, { Component } from 'react';

import './style/global.css';
import './style/main.css';

import designer1 from './img/designer1.svg';
import designer2 from './img/designer2.svg';
import designer3 from './img/designer3.svg';

class People extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='people'>
          <section>
            <h3>people are saying about us</h3>
            <p className='seeAll'>See all {'>'}</p>
          </section>

          <section className='sayingAbout'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              amet veritatis commodi optio doloresarum
            </p>
            <section className='peopleSection'>
              <img src={designer1} alt='designer 1' />
              <section className='peopleName'>
                <h4>Dev opter</h4>
                <p>Designer</p>
              </section>
            </section>
          </section>

          <section className='sayingAbout'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              amet veritatis commodi optio doloresarum
            </p>
            <section className='peopleSection'>
              <img src={designer2} alt='designer 2' />
              <section className='peopleName'>
                <h4>Dev opter</h4>
                <p>Designer</p>
              </section>
            </section>
          </section>

          <section className='sayingAbout'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              amet veritatis commodi optio doloresarum
            </p>
            <section className='peopleSection'>
              <img src={designer3} alt='designer 3' />
              <section className='peopleName'>
                <h4>Dev opter</h4>
                <p>Designer</p>
              </section>
            </section>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default People;
