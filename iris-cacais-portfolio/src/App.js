import './App.css';
import React from 'react';
import Header from './components/Header';
import Sobre from './components/Sobre';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Sobre />
      <main></main>
      </>
      
    )
  }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>Iris Cacais</h1>
  //     </header>
  //   </div>
  // );
}

export default App;
