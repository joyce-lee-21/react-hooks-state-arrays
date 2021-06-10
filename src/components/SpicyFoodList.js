import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filter, filterFoods] = useState("All")
  // console.log(foods)

  const displayFood = foods.filter((food) => {
    console.log(food.cuisine)
    if (filter === "All") {
      return true;
    } else {
      return food.cuisine === filter
    }
  });

  const foodList = displayFood.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    // setFoods(() => spicyFoods.unshift(newFood)) -> my solution
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleLiClick(id) {
    const newFoodArray = foods.filter((food) => 
      (food.id === id ? food.heatLevel++ : food)
    )
    setFoods(newFoodArray);
  }

  function filterFood(event) {
    filterFoods(event.target.value)
    }
  

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={filterFood}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
