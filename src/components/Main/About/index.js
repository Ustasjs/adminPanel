import React, { Component } from 'react';
import SkillList from 'Main/About/SkillList';
import { fetchSkills } from '../../../api';
import ModalIcon from 'Main/ModalIcon';

import './About.scss';

export class About extends Component {
  state = {
    skills: [],
    skillsTypes: [],
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
              type={elem}
              skills={this.filterSkills(elem)}
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

  filterSkills = type => {
    const { skills } = this.state;
    return skills.filter(elem => elem.type === type);
  };

  handleDeleteSkill = (skillId, skillTypeId) => {
    const { state } = this;
    this.setState({
      skills: state.skills.filter(
        elem => elem.id !== skillId || elem.type !== skillTypeId
      )
    });
  };

  handleAddSkill = (id, name, type) => {
    const skill = {
      id,
      name,
      percents: 0,
      type
    };
    const { skills } = this.state;

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
        const skills = res.skills;
        const skillsTypes = res.skills.reduce((prevValue, currentValue) => {
          if (prevValue.indexOf(currentValue.type) === -1) {
            prevValue.push(currentValue.type);
          }
          return prevValue;
        }, []);
        this.setState({ skills: skills, skillsTypes });
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
