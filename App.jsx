// src/App.js
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import './App.css'; // Import the CSS file

const App = () => {
  const foods = [
    {
      name: "Pizza",
      calories: 400,
      image: "https://i.imgur.com/eTmWoAN.png"
    },
    {
      name: "Salad",
      calories: 150,
      image: "https://i.imgur.com/DupGBz5.jpg"
    },
    {
      name: "Sushi",
      calories: 200,
      image: "https://i.imgur.com/UBcAYkP.jpg"
    },
    // Add more food items as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [addedItems, setAddedItems] = useState([]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const filteredList = foods.filter(food =>
      food.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFoods(filteredList);
  };

  const handleAddItem = (food, quantity) => {
    setAddedItems((prevItems) => {
      const existingItem = prevItems.find(item => item.name === food.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === food.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...food, quantity }];
      }
    });
  };

  const handleResetItem = (name) => {
    setAddedItems((prevItems) => 
      prevItems.filter(item => item.name !== name)
    );
  };

  return (
    <div className="container">
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <div className="columns">
        <div className="column">
          {filteredFoods.map((food, index) => (
            <FoodBox key={index} food={food} onAdd={handleAddItem} />
          ))}
        </div>
        <div className="column">
          <h2 className="title">Added Items</h2>
          <ul>
            {addedItems.map((item, index) => (
              <li key={index} className="added-item">
                <span>
                  {item.quantity} {item.name} = {item.quantity * item.calories} cal
                </span>
                <button
                  className="button is-danger is-small"
                  onClick={() => handleResetItem(item.name)}
                >
                  Reset
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
