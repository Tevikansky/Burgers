import React from "react";
import "./Modal.css";
import donut from '../../img/donut.png'
export const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__wraper">
        <div className="modal-left">
          <img src={donut} alt="donut" className="modal__img" />
        </div>
        <div className="modal-right">
          <h1 className="modal__title">Доставка</h1>
          <form className="modal__form">
            <input
              type="text"
              className="modal__input"
              placeholder="Ваше имя"
            />
            <input type="tel" className="modal__input" placeholder="Телефон" />
            <input type="radio" className="modal__input" id="pickup" />
            <label htmlFor="pickup">Самовывоз</label>
            <input type="radio" className="modal__input" id="delivery"/>
            <label htmlFor="delivery">Доставка</label>
            <input type="text" className="modal__input" placeholder="Улица, дом, квартира"/>
            <input type="text" className="modal__input" placeholder="Этаж"/>
            <input type="text" className="modal__input" placeholder="Домофон"/>
            <button className="modal__button">Оформить</button>
          </form>
        </div>
      </div>
    </div>
  );
};
