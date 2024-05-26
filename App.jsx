// src/App.js
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import './App.css';
import foods from './FoodData';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddItem = (food, quantity) => {
    const existingItem = selectedItems.find(item => item.id === food.id);
    if (existingItem) {
      const updatedItems = selectedItems.map(item => {
        if (item.id === existingItem.id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, { ...food, quantity }]);
    }
  };

  const handleResetItem = (id) => {
    const updatedItems = selectedItems.filter(item => item.id !== id);
    setSelectedItems(updatedItems);
  };

  return (
    <div className="container">
      <Search searchTerm={searchTerm} onSearch={handleSearchChange} />
      {foods
        .filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((food) => (
          <FoodBox
            key={food.id}
            food={food}
            onAdd={handleAddItem}
            onReset={() => handleResetItem(food.id)}
          />
        ))}
      <div>
        {selectedItems.map(item => (
          <div key={item.id}>
            <p>{item.quantity} {item.name} = {item.quantity * item.cal} calories</p>
            <button onClick={() => handleResetItem(item.id)}>Reset</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
