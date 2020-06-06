import React from 'react';
import Navbar from './components/Navbar';
import './css/index.css'
import {Route} from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path='/' component={Home}/>
    </React.Fragment>
  );
}

export default App;
