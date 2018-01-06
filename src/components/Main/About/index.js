import React, { Component } from 'react';
import SkillList from 'Main/About/SkillList';
import { fetchSkills } from '../../../api';

import "./About.scss"

export class About extends Component {

  state = {
    skills: [
      {
        Frontend: [{
          "id": 1,
          "name": "Html",
          "percents": 10,
          "type": 1
        }]
      },
      {
        Workflow: [{
          "id": 5,
          "name": "Gulp",
          "percents": 50,
          "type": 2
        }]
      },
      {
        Backend: [{
          "id": 8,
          "name": "Node.js",
          "percents": 80,
          "type": 3
        }]
      }
    ],
    skillsTypes: [
      'frontend',
      'workflow',
      'backend',
    ]
  }

  componentDidMount() {
    fetchSkills()
      .then((res) => {
        this.setState({ skills: res })
      })
  }

  render() {
    const { skillsTypes } = this.state;

    return (
      <div className="about">
        <h2 className="heading heading_medium">
          Страница "Обо мне"
        </h2>
        <ul className="about__list">
          {skillsTypes.map((elem, index) => <SkillList title={elem} key={elem} skills={this.filterSkills(index)} />)}
        </ul>
        <button className="button about__button">Сохранить</button>
      </div>
    )
  }

  filterSkills = (index) => {
    const { skills } = this.state;
    return skills.filter((elem) => elem.type === index + 1)
  }

}

export default About;