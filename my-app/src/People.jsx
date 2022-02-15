import React, { Component } from 'react';

import './style/global.css';
import './style/main.css';

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
          </section>

          <section className='sayingAbout'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              amet veritatis commodi optio doloresarum
            </p>
          </section>

          <section className='sayingAbout'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              amet veritatis commodi optio doloresarum
            </p>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default People;
