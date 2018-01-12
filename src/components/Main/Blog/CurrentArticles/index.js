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
        {articles.length > 0
          ? articles.map(elem => (
              <Article
                deleteArticle={deleteArticle}
                name={elem.name}
                key={elem._id}
                _id={elem._id}
              />
            ))
          : 'Записей пока нет'}
      </ul>
    </div>
  );
}
