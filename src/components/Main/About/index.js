import React, { Component } from 'react';
import SkillList from 'Main/About/SkillList';
import { fetchSkills } from '../../../api';
import ModalIcon from 'Main/ModalIcon';

import './About.scss';

export class About extends Component {
  state = {
    skills: [
      {
        id: 1,
        name: 'Html',
        percents: 10,
        type: 1
      },
      {
        id: 5,
        name: 'Gulp',
        percents: 50,
        type: 2
      },
      {
        id: 8,
        name: 'Node.js',
        percents: 80,
        type: 3
      }
    ],
    skillsTypes: ['frontend', 'workflow', 'backend'],
    showModal: false
  };

  componentDidMount() {
    this.handleUpdateSkills();
  }

  render() {
    const { skillsTypes, showModal } = this.state;

    return (
      <div className="inner-container">
        <h2 className="heading heading_medium">Страница "Обо мне"</h2>
        <ul className="about__list">
          {skillsTypes.map((elem, index) => (
            <SkillList
              deleteHandler={this.handleDeleteSkill}
              addHandler={this.handleAddSkill}
              changePersentsHandler={this.handlePercentsChange}
              title={elem}
              key={elem}
              type={index + 1}
              skills={this.filterSkills(index)}
            />
          ))}
        </ul>
        <button onClick={this.handleSave} className="button about__button">
          Сохранить
        </button>
        {showModal ? <ModalIcon onClick={this.handleModalClick} /> : null}
      </div>
    );
  }

  filterSkills = index => {
    const { skills } = this.state;
    return skills.filter(elem => elem.type === index + 1);
  };

  handleDeleteSkill = (skillId, skillTypeId) => {
    const state = this.state;
    this.setState({
      skills: state.skills.filter(elem => {
        return !(elem.id === skillId && elem.type === skillTypeId);
      })
    });
  };

  handleAddSkill = (id, name, type) => {
    const skill = {
      id,
      name,
      percents: 0,
      type
    };
    const skills = this.state.skills;

    this.setState({ skills: [...skills, skill] });
  };

  handlePercentsChange = (id, type, percents) => {
    const skills = this.state.skills;
    this.setState({
      skills: skills.map(elem => {
        if (!(elem.id === id && elem.type === type)) {
          return elem;
        } else {
          return { ...elem, percents };
        }
      })
    });
  };

  handleUpdateSkills = () => {
    fetchSkills()
      .then(res => {
        this.setState({ skills: res });
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleSave = () => {
    // improve when server will be ready
    this.setState({ showModal: true });
  };

  handleModalClick = () => {
    // improve when server will be ready
    this.setState({ showModal: false });
  };
}

export default About;
