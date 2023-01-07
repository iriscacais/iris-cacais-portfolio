import './App.css';
import React from 'react';
import Header from './components/Header';
class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <main>Iris Cacais</main>
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
