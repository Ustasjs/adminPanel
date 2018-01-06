import React, { Component } from 'react';
import ModalIcon from 'Main/ModalIcon';

import { makeId } from '../../../../utils';
import './WorksForm.scss';
import Logo from 'img/picture.png';

export class WorksForm extends Component {
  state = {
    pictureError: false,
    error: false,
    dataUrl: null,
    formData: null,
    name: '',
    stack: '',
    showModal: false
  };

  render() {
    const { pictureError, error, dataUrl, name, stack, showModal } = this.state;
    return (
      <form action="POST" className="works-form" onSubmit={this.handleSubmit}>
        <h3 className="heading heading_small works-form__heading">
          Добавить работу
        </h3>
        <input
          name="name"
          type="text"
          placeholder="Название проекта"
          className="input works-form__input"
          onChange={this.handleInputChange}
          value={name}
          onBlur={this.handleInputBlur}
        />
        <input
          name="stack"
          type="text"
          placeholder="Технологии"
          className="input works-form__input"
          onChange={this.handleInputChange}
          value={stack}
          onBlur={this.handleInputBlur}
        />
        <label className="works-form__file">
          <input
            type="file"
            onChange={this.handleChange}
            className="works-form__file-input"
          />
          <img src={Logo} alt="Logo" className="works-form__file-img" />
          <span className="works-form__file-text">Загрузить картинку</span>
        </label>
        {pictureError ? (
          <div className="error works-form__pictureError">{pictureError}</div>
        ) : null}
        {error ? <div className="error works-form__error">{error}</div> : null}
        {dataUrl ? (
          <img src={dataUrl} className="works-form__preview" alt="preview" />
        ) : null}
        <button className="button works-form__button">Добавить</button>
        {showModal ? <ModalIcon onClick={this.handleModalClick} /> : null}
      </form>
    );
  }

  handleChange = e => {
    let file = e.target.files[0];
    let errorMessage =
      'Разрешена загрузка только файлов в формате .jpg или .png, размером не более 5мб';

    if (
      (file.type === 'image/jpeg' || file.type === 'image/png') &&
      file.size <= 5000000
    ) {
      const reader = new FileReader();
      const formData = new FormData();

      formData.append('image', file);
      this.setState({ ...this.state, pictureError: false, formData: formData });

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
        formData: null
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
    const { name, stack, pictureError, formData } = this.state;
    const { addWork } = this.props;
    const errorMessage = 'Все поля обязательны для заполнения';

    e.preventDefault();

    if (name === '' || stack === '' || formData === null || pictureError) {
      this.setState({ error: errorMessage });
    } else {
      // improve when server will be ready
      this.setState({ showModal: true, error: false });
      addWork(name, stack, makeId());
    }
  };

  handleModalClick = () => {
    // improve when server will be ready
    this.setState({ showModal: false });
  };
}

export default WorksForm;
