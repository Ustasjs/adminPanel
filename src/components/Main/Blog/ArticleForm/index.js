import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import ModalIcon from 'Main/ModalIcon';
import { makeId } from '../../../../utils';

import './ArticleForm.scss';

export class ArticleForm extends Component {
  state = {
    name: '',
    date: '',
    content: '',
    error: false,
    showModal: false
  };

  render() {
    const { name, content, error } = this.state;
    const {
      handleSubmit,
      handleInputChange,
      handleInputBlur,
      formatDate,
      parseDate,
      handleDayChange
    } = this;
    return (
      <form action="POST" className="article-form" onSubmit={handleSubmit}>
        <h3 className="heading heading_small article-form__heading">
          Добавить запись
        </h3>
        <input
          name="name"
          type="text"
          placeholder="Название"
          className="input article-form__input"
          value={name}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <DayPickerInput
          format={'dd.mm.yyyy'}
          placeholder={'dd.mm.yyyy'}
          formatDate={formatDate}
          parseDate={parseDate}
          onDayChange={handleDayChange}
          classNames={{
            container: 'day-picker',
            overlay: 'day-picker__overlay',
            overlayWrapper: 'day-picker__overlay-wrapper'
          }}
        />
        <textarea
          name="content"
          placeholder="Содержание"
          className="input textarea article-form__textarea"
          value={content}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        {error ? (
          <div className="error article-form__error">{error}</div>
        ) : null}
        <button className="button article-form__button">Добавить</button>
      </form>
    );
  }

  formatDate = date => {
    let days = date.getDate();
    let months = date.getMonth() + 1;
    const years = date.getFullYear();

    if (days < 10) {
      days = '0' + days;
    }
    if (months < 10) {
      months = '0' + months;
    }

    return `${days}.${months}.${years}`;
  };

  parseDate = str => {
    let date = new Date();
    const arrDate = str.split('.');

    if (
      arrDate.length < 3 ||
      arrDate[0].length !== 2 ||
      arrDate[1].length !== 2 ||
      arrDate[2].length !== 4 ||
      !str.match(/^\d+(\.\d+)*$/)
    ) {
      return;
    }

    date.setFullYear(arrDate[2]);
    date.setMonth(arrDate[1]);
    date.setDate(arrDate[0]);

    return date;
  };

  handleDayChange = day => this.setState({ date: day || '' });

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });
  };

  handleInputBlur = e => {
    const value = e.target.value.trim();
    const name = e.target.name;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, content, date } = this.state;
    const { addArticle } = this.props;
    const errorMessage =
      'Все поля обязательны для заполнения. Дата должна быть введена в требуемом формате';

    e.preventDefault();

    if (name === '' || content === '' || date === '') {
      this.setState({ error: errorMessage });
    } else {
      // improve when server will be ready
      addArticle({ name, content, date })
        .then(() => {
          this.setState({
            name: '',
            content: '',
            error: false
          });
        })
        .catch(e => {
          console.log(e.message);
        });
    }
  };
}

export default ArticleForm;
