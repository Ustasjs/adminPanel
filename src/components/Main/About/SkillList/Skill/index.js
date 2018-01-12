import React, { Component } from 'react';
import './Skill.scss';

export class Skill extends Component {
  // state = {
  //   percents: ''
  // };

  // componentWillMount() {
  //   const { skill } = this.props;

  //   this.setState({ percents: skill.percents });
  // }

  // componentWillReceiveProps(nextProps) {
  //   const { skill } = this.props;

  //   if (skill.percents !== nextProps.skill.percents) {
  //     this.setState({ percents: nextProps.skill.percents });
  //   }
  // }

  render() {
    const { skill } = this.props;
    //const { percents } = this.state;

    return (
      <li className="skill">
        <div className="skill__name">{skill.name}</div>
        <div className="controls">
          <input
            type="text"
            className="input skill__input"
            value={skill.percents}
            onChange={this.handleChange}
          />
          <span className="skill__dimension">%</span>
          <button
            onClick={this.deleteClickHandler}
            className="button skill__delete"
          >
            X
          </button>
        </div>
      </li>
    );
  }

  deleteClickHandler = () => {
    const { deleteHandler, skill: { id, type } } = this.props;

    deleteHandler(id, type);
  };

  handleChange = e => {
    const { changePersentsHandler, skill: { id, type } } = this.props;
    let value = e.target.value.trim();

    if (value[0] === '0') {
      value = value.slice(1);
    }

    if (value === '') {
      value = 0;
    }

    if (value >= 0 && value <= 100) {
      changePersentsHandler(id, type, value);
    }
  };
}

export default Skill;
