// src/components/FoodBox.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FoodBox = ({ food, onAdd, onReset }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddClick = () => {
    onAdd(food, quantity);
  };

  return (
    <div className="box">
      <div className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.img} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.cal} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleAddClick}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

FoodBox.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cal: PropTypes.number.isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default FoodBox;
