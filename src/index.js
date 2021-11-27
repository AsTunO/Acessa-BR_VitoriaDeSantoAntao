import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import DevInfo from './components/Curator';
import Footer from './components/Footer';
import Places from './components/Places';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <BrowserRouter>
        <Header />
        <Home />
        <Places />
        <DevInfo />
      </BrowserRouter>
    </div>
    <Footer />
  </div>
  ,
  document.getElementById('root')
);
