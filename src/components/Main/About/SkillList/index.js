import React, { Component } from 'react';
import Skill from './Skill';

import "./SkillList.scss";

export class SkillList extends Component {


  render() {
    const { title, skills } = this.props;

    return (
      <div className="skill-list">
        <h3 className="heading heading_small skill-list__title">{title}</h3>
        <div className="skill-list__content">
          <ul className="skill-list__inner">
            {skills.map((elem) => <Skill skill={elem} key={elem.id} />)}
          </ul>
          <div className="add-skill">
            <input type="text" placeholder="Название" className="input add-skill__input" />
            <button className="button skill-list__button">Добавить</button>
          </div>
        </div>
      </div>
    )
  }

}

export default SkillList;