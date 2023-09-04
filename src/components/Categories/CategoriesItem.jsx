import React, {memo} from "react";


export const CategoriesItem = memo(({

  setActiveCategory,
  category,
  isActive,
}) => {
  // console.log('render', category.title)
  return (
    <button
      className={`menu__item ${isActive}`}
      onClick={() => {
        setActiveCategory(category);
      }}
    >
      <img src={category.svg} alt="" className="menu__item_svg " />
      <p className="menu__item_text">{category.title}</p>
    </button>
  );
})

