import React, { Component } from 'react';
import Skill from './Skill';

import { makeId } from '../../../../utils';
import './SkillList.scss';

export class SkillList extends Component {
  state = {
    skillName: ''
  };

  render() {
    const { title, skills, deleteHandler, changePersentsHandler } = this.props;
    const { skillName } = this.state;

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
          <div className="add-skill">
            <input
              type="text"
              placeholder="Название"
              className="input add-skill__input"
              value={skillName}
              onChange={this.handleChange}
              onKeyPress={this.handleEnterPress}
            />
            <button
              onClick={this.handleAddSkill}
              className="button skill-list__button"
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ skillName: e.target.value.trim() });
  };

  handleAddSkill = () => {
    const { addHandler, type } = this.props;
    const { skillName } = this.state;
    const id = makeId();

    if (skillName !== '') {
      addHandler(id, skillName, type);

      this.setState({ skillName: '' });
    }
  };

  handleEnterPress = e => {
    if (e.key === 'Enter') {
      this.handleAddSkill();
    }
  };
}

export default SkillList;
