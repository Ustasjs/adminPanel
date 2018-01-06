import React, { Component } from 'react';
import Tab from 'Tabs/Tab';

import "./Tabs.scss";

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { name: 'About', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: 'Works', path: '/works' }
      ]
    }
  }

  render() {
    const { tabs } = this.state;
    return (
      <ul className="tabs">
        {tabs.map((elem, index) => <Tab data={elem} index={index + 1} key={elem.name} />)}
      </ul>
    )
  }

}

export default Tabs;