import React from 'react';
import './scss/App.scss';
import './scss/reset.scss';
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {


  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
