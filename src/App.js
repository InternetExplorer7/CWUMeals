import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Buy from './components/Buy';
import Sell from './components/Sell';
import Faq from './components/Faq';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Buy}/>
          <Route path="/buy" component={Buy}/>
          <Route path="/sell" component={Sell}/>
          <Route path="/faq" component={Faq}/> 
        </div>
      </BrowserRouter>
    )
  }
}

Component.PropTypes = {
  
}

export default App;
