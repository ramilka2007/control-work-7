import './App.css'
import {Menu} from './types';
import {useState} from 'react';
import drinkImage from 'assets/drink.png';
import foodImage from 'assets/food.png';

const App = () => {
  const MENU: Menu[] = [
    {name: 'Hamburger', price: 80, image: `${foodImage}`},
    {name: 'Coffee', price: 70, image: `${drinkImage}`},
    {name: 'CheeseBurger', price: 90, image: `${foodImage}`},
    {name: 'Tea', price: 50, image: `${drinkImage}`},
    {name: 'Fries', price: 45, image: `${foodImage}`},
    {name: 'Cola', price: 40, image: `${drinkImage}`},
  ];

  const [menu] = useState([
    {name: 'Hamburger', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'CheeseBurger', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Cola', count: 0},
  ]);

  const menuList = menu.map((menuItem, index) => ({
    ...menuItem, ...MENU[index]}));

  return (
      <div className="row">
        <div className="chosenItems"></div>
        <div className="MenuList">
          <h1 className="title">Add Items:</h1>
        </div>
      </div>
  )
};

export default App