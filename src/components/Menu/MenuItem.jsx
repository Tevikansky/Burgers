import React from 'react'
// import photo from '../../img/photo.png'
import './MenuItem.css'

export const MenuItem = ({photo, price, name, weight, addItem, inCart}) => {
  return (
    <div className='menu-item'>
      <img src={photo} alt="meal" className='menu-item__img'/>
      <span className='cost'>{price}</span>
      <p className="name-meal">{name}</p>
      <p className="weight-meal">{weight}</p>
      <button className={`menu-item__button ${inCart}`} onClick={addItem}>Добавить</button>
    </div>
  )
}
