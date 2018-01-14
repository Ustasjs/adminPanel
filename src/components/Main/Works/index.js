import React, { Component } from 'react';
import WorksForm from './WorksForm';
import CurrentWorks from './CurrentWorks';
import { fetchWorks, addWorksToDb, deleteWorkseFromDb } from '../../../api';

export class Works extends Component {
  state = {
    works: [],
    connectionError: false
  };

  componentDidMount() {
    this.handleUpdateWorks();
  }

  render() {
    const { works, connectionError } = this.state;

    return (
      <div className="inner-container">
        <h2 className="heading heading_medium">Страница "Мои работы"</h2>
        {connectionError ? (
          <div className="error blog__error">
            Произошла ошибка соединения: {connectionError}
          </div>
        ) : null}
        <div className="inner-wrapper">
          <WorksForm addWork={this.addWork} />
          <CurrentWorks works={works} deleteWork={this.handleDeleteWork} />
        </div>
      </div>
    );
  }

  handleUpdateWorks = () => {
    return fetchWorks()
      .then(res => {
        this.setState({ works: res.works, connectionError: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ connectionError: err.message });
      });
  };

  addWork = (name, stack, link, description, file) => {
    return addWorksToDb(name, stack, link, description, file)
      .then(() => this.handleUpdateWorks())
      .catch(err => {
        console.error(err);
        this.setState({ connectionError: err.message });
      });
  };

  handleDeleteWork = id => {
    deleteWorkseFromDb(id)
      .then(() => this.handleUpdateWorks())
      .catch(err => {
        console.error(err);
        this.setState({ connectionError: err.message });
      });
  };
}

export default Works;
