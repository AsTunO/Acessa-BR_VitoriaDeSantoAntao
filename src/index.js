import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Header from './components/Header';
import Home from './pages/Home';
import DevInfo from './components/Curator';
import Footer from './components/Footer';
import Places from './components/Places';

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header 
        city="Vitória de Santo Antão"
        uf="PE"
      />
      <Home 
        city="Vitória de Santo Antão"
      />
      <Places />
      <DevInfo />
    </div>
    <Footer />
  </div>
  ,
  document.getElementById('root')
);
