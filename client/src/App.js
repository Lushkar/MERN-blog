import React from 'react';
import Navbar from './components/Navbar';
import './css/index.css'
import {Route} from 'react-router-dom';
import Home from './components/Home'
import ArticlePage from './components/ArticlePage'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route path='/:id' component={ArticlePage} />
    </React.Fragment>
  );
}

export default App;
