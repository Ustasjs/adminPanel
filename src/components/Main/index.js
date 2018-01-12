import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from "./About";
import Blog from "./Blog";
import Works from "./Works";

import './Main.scss';

export class Main extends Component {

  render() {
    return (
      <main className="main">
        <div className="wrapper">
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/works" component={Works} />
            <Redirect to="/" />
          </Switch>
        </div>
      </main>
    )
  }

}

export default Main;