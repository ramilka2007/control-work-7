import React from 'react';
import './Menu.css'

interface MenuForChoose {
  name: string,
  price: number,
  image: string,
  addItemClick: React.MouseEventHandler,
}

const MenuForChoose: React.FC<MenuForChoose> = ({name, price, image, addItemClick}) => {
  return (
    <div className="menuItem" onClick={addItemClick}>
      <div className="ItemImage">
        <img src={image} alt={name}/>
      </div>
      <div className="ItemName">
        <div>
          <strong>{name}</strong>
        </div>
        <div>
          <strong>{price} KGS</strong>
        </div>
      </div>
    </div>
  );
};

export default MenuForChoose;