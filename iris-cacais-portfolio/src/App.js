import './App.css';
import React from 'react';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Banner from './components/Banner';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Banner />
      <Sobre />
      <Habilidades />
      <Projetos />
  
      </>
      
    )
  }
}

export default App;
