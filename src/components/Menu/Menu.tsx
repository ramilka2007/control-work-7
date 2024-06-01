import React from 'react';
import './Menu.css'

interface MenuForChoose {
  name: string,
  price: number,
  image: string,
}

const MenuForChoose: React.FC<MenuForChoose> = ({name, price, image}) => {
  return (
    <div className="menuItem">
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