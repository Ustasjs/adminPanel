import React, { Component } from 'react';
import SkillList from 'Main/About/SkillList';
import {
  fetchSkills,
  addSkillToDb,
  updateSkillsDB,
  deleteSkillFromDb
} from '../../../api';
import ModalIcon from 'Main/ModalIcon';

import './About.scss';

export class About extends Component {
  state = {
    skills: [],
    skillsTypes: [],
    showModal: false,
    skillName: '',
    skillTypeName: '',
    percents: '',
    inputError: false,
    connectionError: false
  };

  componentDidMount() {
    this.handleUpdateSkills();
  }

  render() {
    const {
      skillsTypes,
      showModal,
      skillName,
      skillTypeName,
      percents,
      inputError,
      connectionError
    } = this.state;

    const {
      handleDeleteSkill,
      handleAddSkill,
      handlePercentsChange,
      filterSkills,
      handleChange,
      handlePersentInputChange,
      handleSave,
      handleModalClick
    } = this;

    return (
      <div className="inner-container">
        <h2 className="heading heading_medium">Страница "Обо мне"</h2>
        {connectionError ? (
          <div className="error about__error">
            Произошла ошибка соединения: {connectionError}
          </div>
        ) : null}
        <ul className="about__list">
          {skillsTypes.map((elem, index) => (
            <SkillList
              deleteHandler={handleDeleteSkill}
              addHandler={handleAddSkill}
              changePersentsHandler={handlePercentsChange}
              title={elem}
              key={elem}
              type={elem}
              skills={filterSkills(elem)}
            />
          ))}
        </ul>
        <div className="add-skill">
          {inputError ? (
            <div className="error add-skill__error">{inputError}</div>
          ) : null}
          <h3 className="heading heading_small add-skill__title">
            Добавить навык
          </h3>
          <div className="add-skill__wrap">
            <input
              type="text"
              name="skillName"
              placeholder="Название"
              className="input add-skill__input"
              value={skillName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="skillTypeName"
              placeholder="Тип"
              className="input add-skill__input"
              value={skillTypeName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="percents"
              placeholder="%"
              className="input add-skill__input add-skill__input_percents"
              value={percents}
              onChange={handlePersentInputChange}
            />
            <button
              onClick={handleAddSkill}
              className="button skill-list__button"
            >
              Добавить
            </button>
          </div>
        </div>
        <button onClick={handleSave} className="button about__button">
          Сохранить
        </button>
        {showModal ? <ModalIcon onClick={handleModalClick} /> : null}
      </div>
    );
  }

  filterSkills = type => {
    const { skills } = this.state;
    return skills.filter(elem => elem.type === type);
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
        this.setState({ connectionError: err.message });
      });
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value.trim() });
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

  handlePersentInputChange = e => {
    const name = e.target.name;
    let value = e.target.value.trim();

    if (value[0] === '0') {
      value = value.slice(1);
    }

    if (value >= 0 && value <= 100) {
      this.setState({ [name]: value });
    }
  };

  handleAddSkill = () => {
    const { skillName, skillTypeName, percents } = this.state;
    const error = 'Все поля обязательны для заполнения';

    if (skillName === '' || skillTypeName === '' || percents === '') {
      this.setState({ inputError: error });
      return;
    }

    const lowerCaseTypeName = skillTypeName.toLowerCase();

    return addSkillToDb(skillName, percents, lowerCaseTypeName)
      .then(() => this.handleUpdateSkills())
      .then(() => this.setState({ skillName: '', percents: '' }))
      .catch(err => {
        console.error(err);
        this.setState({ connectionError: err.message });
      });
  };

  handleDeleteSkill = id => {
    deleteSkillFromDb(id)
      .then(() => this.handleUpdateSkills())
      .catch(err => {
        console.error(err);
        this.setState({ connectionError: err.message });
      });
  };

  handleSave = () => {
    const { skills } = this.state;
    updateSkillsDB(skills)
      .then(() => this.setState({ showModal: true }))
      .then(() => this.handleUpdateSkills())
      .catch(err => {
        console.error(err);
        this.setState({ connectionError: err.message });
      });
  };

  handleModalClick = () => {
    this.setState({ showModal: false });
  };
}

export default About;
