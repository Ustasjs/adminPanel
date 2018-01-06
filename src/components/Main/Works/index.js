import React, { Component } from 'react';
import WorksForm from './WorksForm';
import CurrentWorks from './CurrentWorks';
import { fetchWorks } from '../../../api';

import "./Works.scss";

export class Works extends Component {

  state = {
    works: null
  }

  componentDidMount() {
    fetchWorks()
      .then((res) => {
        this.setState({ works: res })
      })
  }

  render() {
    const { works } = this.state;

    return (
      <div className="works">
        <h2 className="heading heading_medium">
          Страница "Мои работы"
        </h2>
        <div className="works__wrapper">
          <WorksForm />
          <CurrentWorks works={works} />
        </div>
      </div>
    )
  }
}

export default Works;