import React from 'react';
import Work from "./Work";

import "./CurrentWorks.scss";

export default function CurrentWorks(props) {

  const { works } = props;

  return (
    <div className="current-works">
      <h3 className="heading heading_small current-works__heading">Текущие работы</h3>
      <ul className="current-works__list">
        {works ? works.map((elem) => <Work name={elem.name} key={elem.id} />) : 'Работ пока нет'}
      </ul>
      <button className="button current-works__button">Сохранить</button>
    </div>
  )
}

