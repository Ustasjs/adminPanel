import React from 'react';
import Article from './Article';

import "./CurrentArticles.scss";

export default function CurrentArticles(props) {

  const { articles } = props;

  return (
    <div className="current-articles">
      <h3 className="heading heading_small current-articles__heading">Текущие работы</h3>
      <ul className="current-articles__list">
        {articles ? articles.map((elem) => <Article name={elem.name} key={elem.id} />) : 'Записей пока нет'}
      </ul>
      <button className="button current-articles__button">Сохранить</button>
    </div>
  )
}