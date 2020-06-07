import React from 'react';
import Navbar from './components/Navbar';
import './css/index.css'
import {Route} from 'react-router-dom';
import Home from './components/Home';
import ArticlePage from './components/ArticlePage';
import NewArticlePage from './components/NewArticle';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/new' component={NewArticlePage} />
      <Route path='/articles/:id' component={ArticlePage} />
    </React.Fragment>
  );
}

export default App;
