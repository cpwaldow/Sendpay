import React, { Component } from 'react';

import logo from './logo.png';

import './style/global.css';
import './style/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className='container'>
        <section>
          <section className='container'>
            <img src={logo} alt='logo' className='logo' />
            <h3 className='companyName'>Sendpay</h3>
          </section>
          <p className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            ipsum dolorum quae officia maxime
          </p>
        </section>
        <section>
          <ul>
            <li className='firstItem'>Products</li>
            <li className='product'>Products</li>
            <li className='product'>Products</li>
            <li className='product'>Products</li>
          </ul>
        </section>
        <section>
          <ul>
            <li className='firstItem'>Sobre</li>
            <li className='product'>Sobre</li>
            <li className='product'>Sobre</li>
            <li className='product'>Sobre</li>
          </ul>
        </section>
        <section>
          <ul>
            <li className='firstItem'>Catalogo</li>
            <li className='product'>Catalogo</li>
            <li className='product'>Catalogo</li>
            <li className='product'>Catalogo</li>
          </ul>
        </section>
        <section className='redeSocial'>
          <h4>Redes Sociais</h4>
          <p>Facebook</p>
          <p>Github</p>
          <p>Twitter</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
