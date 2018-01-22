import React from 'react';
import Work from './Work';

import './CurrentWorks.scss';

export default function CurrentWorks(props) {
  const { works, deleteWork } = props;

  return (
    <div className="current-works">
      <h3 className="heading heading_small current-works__heading">
        Текущие работы
      </h3>
      <ul className="current-works__list">
        {works.length > 0
          ? works.map(elem => (
              <Work
                deleteWork={deleteWork}
                name={elem.name}
                key={elem.id}
                id={elem.id}
              />
            ))
          : 'Работ пока нет'}
      </ul>
    </div>
  );
}
