import React, { Component } from 'react';

import "./WorksForm.scss";
import Logo from 'img/picture.png';

export class WorksForm extends Component {

  state = {
    file: {
      error: false,
      dataUrl: null,
      formData: null
    }
  }

  render() {
    const { file: { error, dataUrl } } = this.state;
    return (
      <form action="POST" className="works-form">
        <h3 className="heading heading_small works-form__heading">Добавить работу</h3>
        <input name="Name" type="text" placeholder="Название проекта" className="input works-form__input" />
        <input name="Stack" type="text" placeholder="Технологии" className="input works-form__input" />
        <label className="works-form__file">
          <input type="file" onChange={this.handleChange} className="works-form__file-input" />
          <img src={Logo} alt="Logo" className="works-form__file-img" />
          <span className="works-form__file-text">Загрузить картинку</span>
        </label>
        {error ? (<div className="works-form__error">{error}</div>) : null}
        {dataUrl ? (<img src={dataUrl} className="works-form__preview" alt="preview" />) : null}
        <button className="button works-form__button">Добавить</button>
      </form>
    )
  }

  handleChange = (e) => {
    let file = e.target.files[0];
    let errorMessage = "Разрешена загрузка только файлов в формате .jpg или .png, размером не более 5мб"

    if ((file.type === "image/jpeg" || file.type === "image/png") && file.size <= 5000000) {
      const reader = new FileReader();
      const formData = new FormData();

      formData.append('image', file);
      this.setState({ file: { ...this.state.file, error: false, formData: formData } });

      reader.readAsDataURL(file);
      reader.addEventListener('loadend', (e) => {
        this.setState({ file: { ...this.state.file, error: false, dataUrl: e.target.result } })
      })

    } else {
      this.setState({ file: { error: errorMessage, data: null, formData: null } })
    }

  }

}

export default WorksForm;