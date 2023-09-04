import React, { useState, useEffect } from "react";
import { MenuList } from "./Menu/MenuList";
import { Cart } from "./Cart/Cart";
import "./Main.css";
import { Range } from "./Utils/MenuBurgers";
import { Categories } from "./Categories/Categories";
import { categories } from "./Utils/MenuCategories";
import { Modal } from "./Modal/Modal";

export const Main = () => {
  const [range, setRange] = useState(Range.burgers);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [order, setOrder] = useState([]);
  const [quantityFood, setQuantityFood] = useState(0);
  const [price, setPrice] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setRange(Range[activeCategory.id]);
  }, [activeCategory]);
  useEffect(() => {
    setQuantityFood(
      order.reduce((accumulator, obj) => accumulator + obj.quantity, 0)
    );
  }, [order]);
  useEffect(() => {
    setPrice(
      order.reduce(
        (accumulator, obj) => accumulator + Number(obj.price) * obj.quantity,
        0
      )
    );
  }, [order]);

  const addFnc = (obj) => {
    setOrder((prev) => {
      const arr = prev.map((itemArr) => {
        if (itemArr.name === obj.name) {
          let quantity = itemArr.quantity + 1;
          return { ...itemArr, quantity };
        }
        return itemArr;
      });
      return arr;
    });
  };

  const addCart = (object) => {
    const cloneObject = structuredClone(object);
    cloneObject.price = cloneObject.price.slice(0, -1);
    cloneObject.weight = cloneObject.weight.slice(0, -1);
    cloneObject.quantity = 1;
    if (
      order.length > 0 &&
      order.find((item) => item.name === cloneObject.name)
    ) {
      addFnc(cloneObject);
    } else {
      setOrder([...order, cloneObject]);
    }
  };
  const increaseCart = (obj) => {
    addFnc(obj);
  };
  const decreaseCart = (obj) => {
    setOrder((prev) => {
      const arr = prev.map((itemArr) => {
        if (itemArr.name === obj.name) {
          let quantity = itemArr.quantity - 1;
          return { ...itemArr, quantity };
        }
        return itemArr;
      });
      return arr;
    });
    setOrder((prev) => prev.filter((item) => item.quantity > 0));
  };

  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <>
      <Categories
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <div className="main-wrapper container">
        <div className="left-side">
          <Cart
            order={order}
            quantityFood={quantityFood}
            price={price}
            increaseCart={increaseCart}
            decreaseCart={decreaseCart}
            toggleModal={toggleModal}
          />
        </div>
        <div className="right-side">
          <MenuList
            menu={range}
            title={activeCategory.title}
            addItem={addCart}
            order={order}
          />
        </div>
      </div>
      {modal ? (<Modal />) : null}
      
    </>
  );
};
