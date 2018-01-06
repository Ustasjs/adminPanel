import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import "./ArticleForm.scss";

export class ArticleForm extends Component {

  render() {
    return (
      <form action="POST" className="article-form">
        <h3 className="heading heading_small article-form__heading">Добавить запись</h3>
        <input name="Name" type="text" placeholder="Название" className="input article-form__input" />
        <DayPickerInput
          format={"dd.mm.yyy"}
          placeholder={"dd.mm.yyy"}
          formatDate={this.formatDate}
          parseDate={this.parseDate}
          classNames={{ container: 'day-picker', overlay: "day-picker__overlay", overlayWrapper: "day-picker__overlay-wrapper" }}
        />
        <textarea name="article" placeholder="Содержание" className="input article-form__textarea"></textarea>
        <button className="button article-form__button">Добавить</button>
      </form>
    )
  }

  formatDate = (date) => {
    let days = date.getDate();
    let months = date.getMonth() + 1;
    const years = date.getFullYear();

    if (days < 10) {
      days = "0" + days
    }
    if (months < 10) {
      months = "0" + months
    }

    return `${days}.${months}.${years}`;
  }

  parseDate = (str) => {
    let date = new Date();
    const arrDate = str.split('.');

    if (arrDate.length < 3 || arrDate[0].length !== 2 || arrDate[1].length !== 2 || arrDate[2].length !== 4) return;

    date.setFullYear(arrDate[2]);
    date.setMonth(arrDate[1]);
    date.setDate(arrDate[0]);

    return date;
  }
}

export default ArticleForm;