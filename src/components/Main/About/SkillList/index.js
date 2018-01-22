import React, { Component } from 'react';
import Skill from './Skill';

import { makeId } from '../../../../utils';
import './SkillList.scss';

export class SkillList extends Component {
  render() {
    const { title, skills, deleteHandler, changePersentsHandler } = this.props;

    return (
      <div className="skill-list">
        <h3 className="heading heading_small skill-list__title">{title}</h3>
        <div className="skill-list__content">
          <ul className="skill-list__inner">
            {skills.map(elem => (
              <Skill
                skill={elem}
                key={elem.id}
                deleteHandler={deleteHandler}
                changePersentsHandler={changePersentsHandler}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SkillList;
