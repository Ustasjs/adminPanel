import React from 'react';

import "./Article.scss";

export default function Work(props) {

  const { name } = props;

  return (
    <li className="article">
      <div className="article__name">{name}</div>
      <button className="button article__delete">X</button>
    </li>
  )
}