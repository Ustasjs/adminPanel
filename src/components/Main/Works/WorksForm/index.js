import React, { Component } from 'react';

import './WorksForm.scss';
import Logo from '../../../../assets/img/picture.png';

export class WorksForm extends Component {
  state = {
    pictureError: false,
    error: false,
    dataUrl: null,
    file: null,
    name: '',
    stack: ''
  };

  render() {
    const { pictureError, error, dataUrl, name, stack } = this.state;
    const {
      handleSubmit,
      handleInputChange,
      handleInputBlur,
      handleChange
    } = this;
    return (
      <form action="POST" className="works-form" onSubmit={handleSubmit}>
        <h3 className="heading heading_small works-form__heading">
          Добавить работу
        </h3>
        <input
          name="name"
          type="text"
          placeholder="Название проекта"
          className="input works-form__input"
          onChange={handleInputChange}
          value={name}
          onBlur={handleInputBlur}
        />
        <input
          name="stack"
          type="text"
          placeholder="Технологии"
          className="input works-form__input"
          onChange={handleInputChange}
          value={stack}
          onBlur={handleInputBlur}
        />
        <label className="works-form__file">
          <input
            type="file"
            onChange={handleChange}
            className="works-form__file-input"
          />
          <img src={Logo} alt="Logo" className="works-form__file-img" />
          <span className="works-form__file-text">Загрузить картинку</span>
        </label>
        {pictureError ? (
          <div className="error works-form__error works-form__error_picture">
            {pictureError}
          </div>
        ) : null}
        {error ? <div className="error works-form__error">{error}</div> : null}
        {dataUrl ? (
          <img src={dataUrl} className="works-form__preview" alt="preview" />
        ) : null}
        <button className="button works-form__button">Добавить</button>
      </form>
    );
  }

  handleChange = e => {
    let file = e.target.files[0];
    let errorMessage =
      'Разрешена загрузка только файлов в формате .jpg или .png, размером не более 5мб';
    console.log('+++', file);

    if (
      (file.type === 'image/jpeg' || file.type === 'image/png') &&
      file.size <= 5000000
    ) {
      console.log('----', file);
      const reader = new FileReader();

      this.setState({ ...this.state, pictureError: false, file: file });

      reader.readAsDataURL(file);
      reader.addEventListener('loadend', e => {
        this.setState({
          ...this.state,
          pictureError: false,
          dataUrl: e.target.result
        });
      });
    } else {
      this.setState({
        pictureError: errorMessage,
        dataUrl: null,
        file: null
      });
    }
  };

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
    const { name, stack, pictureError, file } = this.state;
    const { addWork } = this.props;
    const errorMessage = 'Все поля обязательны для заполнения';

    e.preventDefault();

    if (name === '' || stack === '' || file === null || pictureError) {
      this.setState({ error: errorMessage });
    } else {
      addWork(name, stack, file);
      this.setState({
        error: false,
        name: '',
        stack: ''
      });
    }
  };
}

export default WorksForm;
