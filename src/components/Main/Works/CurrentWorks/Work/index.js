import React from 'react';

import './Work.scss';

export default function Work(props) {
  const { name } = props;

  return (
    <li className="work">
      <div className="work__name">{name}</div>
      <button className="button work__delete" onClick={handleClick}>
        X
      </button>
    </li>
  );

  function handleClick() {
    const { id, deleteWork } = props;

    deleteWork(id);
  }
}
