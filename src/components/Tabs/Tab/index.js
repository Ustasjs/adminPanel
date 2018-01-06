import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Tab.scss";

export default function Tab({ data, index }) {
  return (<li className="tab">
    <NavLink exact to={`${data.path}`} className="tab__link" activeClassName="tab__link_active">
      {'TAB' + index}
    </NavLink>
  </li>)
}