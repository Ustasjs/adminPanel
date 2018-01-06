import React, { Component } from 'react';
import "./Skill.scss";

export class Skill extends Component {

  render() {
    const { skill } = this.props;

    return (
      <li className="skill">
        <div className="skill__name">{skill.name}</div>
        <div className="controls">
          <input type="text" className="input skill__input" value={skill.percents} />
          <span className="skill__dimension">%</span>
          <button className="button skill__delete">X</button>
        </div>
      </li>
    )
  }
}


export default Skill;