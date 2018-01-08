import React, { Component } from 'react';
import WorksForm from './WorksForm';
import CurrentWorks from './CurrentWorks';
import { fetchWorks } from '../../../api';

export class Works extends Component {
  state = {
    works: []
  };

  componentDidMount() {
    this.handleUpdateWorks();
  }

  render() {
    const { works } = this.state;

    return (
      <div className="inner-container">
        <h2 className="heading heading_medium">Страница "Мои работы"</h2>
        <div className="inner-wrapper">
          <WorksForm addWork={this.addWork} />
          <CurrentWorks works={works} deleteWork={this.handleDeleteWork} />
        </div>
      </div>
    );
  }

  handleUpdateWorks = () => {
    fetchWorks()
      .then(res => {
        this.setState({ works: res });
      })
      .catch(err => {
        console.error(err);
      });
  };

  addWork = (name, stack, id) => {
    const work = { name, stack, id };
    const works = this.state.works;

    this.setState({ works: [...works, work] });
  };

  handleDeleteWork = id => {
    const works = this.state.works;
    this.setState({
      works: works.filter(elem => elem.id !== id)
    });
  };
}

export default Works;
