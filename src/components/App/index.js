import React, { Component } from 'react';
import Header from 'Header';
import Tabs from 'Tabs';
import Main from 'Main';

import './App.scss';

export class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Tabs />
        <Main />
      </div>
    )
  }

}

export default App;