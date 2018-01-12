import React from 'react';

import './Article.scss';

export default function Work(props) {
  const { name, deleteArticle } = props;

  return (
    <li className="article">
      <div className="article__name">{name}</div>
      <button onClick={handleClick} className="button article__delete">
        X
      </button>
    </li>
  );

  function handleClick() {
    const { deleteArticle, id } = props;
    deleteArticle(id);
  }
}
