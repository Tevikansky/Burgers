import React, { useEffect } from "react";
import "./Categories.css";

import { CategoriesItem } from "./CategoriesItem";
import { categories } from "../Utils/MenuCategories";

export const Categories = ({ setActiveCategory, activeCategory }) => {
  return (
    <div className="menu__list container">
      <div className="menu__list_wrapper">
      {categories.map((item) => (
        <CategoriesItem
          setActiveCategory={setActiveCategory}
          category={item}
          key={item.id}
          isActive={activeCategory.id === item.id ? "active" : ""}
        />
      ))}
      </div>
    </div>
  );
};
