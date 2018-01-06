import React from 'react';
import Article from './Article';

import './CurrentArticles.scss';

export default function CurrentArticles(props) {
  const { articles, deleteArticle } = props;

  return (
    <div className="current-articles">
      <h3 className="heading heading_small current-articles__heading">
        Текущие статьи
      </h3>
      <ul className="current-articles__list">
        {articles
          ? articles.map(elem => (
              <Article
                deleteArticle={deleteArticle}
                name={elem.name}
                key={elem.id}
                id={elem.id}
              />
            ))
          : 'Записей пока нет'}
      </ul>
      <button
        onClick={handleSaveClick}
        className="button current-articles__button"
      >
        Сохранить
      </button>
    </div>
  );

  function handleSaveClick() {
    // improve when server will be ready
  }
}
