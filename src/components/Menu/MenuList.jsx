import React from "react";
import { MenuItem } from "./MenuItem";
import "./MenuList.css";

export const MenuList = ({ menu, title, addItem,order }) => {
  return (
    <div>
      <h1 className="menu-list__title">{title}</h1>
      <div className="menu-list__wrapper">
        {menu.length > 0 ? (
          menu.map((item) => (
            <MenuItem
              photo={item.image}
              price={item.price}
              name={item.name}
              weight={item.weight}
              key={item.name}
              addItem={() => addItem(item)}
              inCart={order.find((itemOrder) => itemOrder.name === item.name) ? 'in-cart' : ''}
            />
          ))
        ) : (
          <>
            <p>Тут пусто</p>
          </>
        )}
      </div>
    </div>
  );
};
