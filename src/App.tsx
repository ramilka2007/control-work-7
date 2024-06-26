import './App.css'
import {Menu} from './types';
import {useState} from 'react';
import MenuForChoose from './components/Menu/Menu';
import drinkImage from './assets/drink.png';
import foodImage from './assets/food.png';
import OrderDetails from './components/OrderDetails/OrderDetails';
const App = () => {
  const MENU: Menu[] = [
    {name: 'Hamburger', price: 80, image: `${foodImage}`},
    {name: 'Coffee', price: 70, image: `${drinkImage}`},
    {name: 'CheeseBurger', price: 90, image: `${foodImage}`},
    {name: 'Tea', price: 50, image: `${drinkImage}`},
    {name: 'Fries', price: 45, image: `${foodImage}`},
    {name: 'Cola', price: 40, image: `${drinkImage}`},
  ];

  const [menu, setMenu] = useState([
    {name: 'Hamburger', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'CheeseBurger', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Cola', count: 0},
  ]);

  const menuList = menu.map((menuItem, index) => ({
    ...menuItem, ...MENU[index]}));

  const haveOrders = menu.filter((item) => item.count > 0)

  const totalPrice:number = menuList.reduce((acc, value) => {
    if (value.count === 0) {
      return acc;
    } else {
      return acc + (value.price * value.count);
    }
  }, 0);

  const addItem = (name: string) => {
    setMenu((prevMenu) => {
      return prevMenu.map((item) => {
        if (item.name === name) {
          return {...item, count: item.count + 1};
        }
        return item;
      });
    });
  };

  const deleteItem = (name: string) => {
    setMenu((prevMenu) => {
      return prevMenu.map((item) => {
        if (item.name === name) {
          return {...item, count: item.count - 1};
        }
        return item;
      });
    });
  };

  return (
    <div className="row">
      <div className="chosenItems">
        <div className="title">
          <h1>Order Details:</h1>
        </div>
        {haveOrders.length === 0 ?
          <>
            <h2>Order is empty! <br/> Please add some items</h2>
          </>
          :
          <>
            <div className="addedItems">
              {menuList.map((menuItem) => (
                <OrderDetails
                  key={menuItem.price - 10}
                  name={menuItem.name}
                  price={menuItem.price}
                  count={menuItem.count}
                  deleteItemClick={() => deleteItem(menuItem.name)}/>
              ))}
            </div>
            <div className="totalPrice">
              <strong>Total price: {totalPrice} KGS</strong>
            </div>
          </>
        }
      </div>
      <div className="MenuList">
        <div className="title">
          <h1>Add Items:</h1>
        </div>
        <div className="itemsRow">
          {menuList.map((menuItem) => (
            <MenuForChoose
              key={menuItem.price + 10}
              name={menuItem.name}
              price={menuItem.price}
              image={menuItem.image}
              addItemClick={() => addItem(menuItem.name)}/>
          ))};
        </div>
      </div>
    </div>
  )
};

export default App