import React from "react";
import "./CartItem.css";

export const CartItem = ({ photo, price, name, weight, quantity, increaseCart,decreaseCart }) => {
  return (
    <div className="cart-item">
      <img className="cart-item__img" src={photo} alt="meal" />
      <div className="cart-item__wrapper">
        <h1 className="cart-item__title">{name}</h1>
        <p className="cart-item__text">{weight}г</p>
        <p className="cart-item-cost">{price}₽</p>
      </div>
      <div className="cart-item__btn-wrapper">
        <button className="cart-item__btn remove" onClick={decreaseCart}>-</button>
        <span className="cart-item-quantity">{quantity}</span>
        <button className="cart-item__btn add" onClick={increaseCart}>+</button>
      </div>
    </div>
  );
};
