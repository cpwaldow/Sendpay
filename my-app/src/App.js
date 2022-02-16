import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import './style/global.css';

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Main />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
