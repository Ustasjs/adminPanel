import React from 'react';
import ReactDOM from 'react-dom';

import './ModalIcon.scss';

export default function ModalIcon(props) {
  return ReactDOM.createPortal(
    <Modal data={props} />,
    document.getElementById('root')
  );
}

function Modal(props) {
  const { data: { onClick } } = props;

  return (
    <div className="modal">
      <div className="message">
        <div className="message__content">Сообщение отправлено</div>
        <button onClick={onClick} className="button message__button">
          Закрыть
        </button>
      </div>
    </div>
  );
}
