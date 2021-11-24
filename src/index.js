import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Header from './components/Header';
import Home from './pages/Home';
import DevInfo from './components/Curator'

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
      <DevInfo />
    </div>
  </div>
  ,
  document.getElementById('root')
);
