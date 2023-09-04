import React from "react";
import { CartItem } from "./CartItem";
import "./Cart.css";

export const Cart = ({
  order,
  quantityFood,
  increaseCart,
  decreaseCart,
  price,
  toggleModal,
}) => {
  return (
    <div className="cart">
      <div className="cart-header">
        <h1 className="cart-header_title">Корзина</h1>
        <span className="cart-header-quantity">{quantityFood}</span>
      </div>
      <div className="cart-list">
        {order.length > 0 ? (
          order.map((item) => {
            return (
              <CartItem
                photo={item.image}
                price={item.price}
                name={item.name}
                weight={item.weight}
                key={item.name}
                quantity={item.quantity}
                increaseCart={() => increaseCart(item)}
                decreaseCart={() => decreaseCart(item)}
              />
            );
          })
        ) : (
          <>
            <p>Корзина пуста</p>
          </>
        )}
      </div>
      <div className="cart-footer">
        <p className="final-cost">Итого</p>
        <span className="final-cost__span">{price}₽</span>
        <button
          className="cart__button"
          onClick={toggleModal}
          disabled={order.length > 0 ? false : true}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
};
