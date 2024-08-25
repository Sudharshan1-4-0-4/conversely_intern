import React, { useState } from 'react';
import './color.css'; 

const Color = () => {
  const [grid, setGrid] = useState(Array(9).fill('')); 
  const [clickOrder, setClickOrder] = useState([]); 

  const handleClick = (index) => {
    if (grid[index] === '') { 
      const newGrid = [...grid];
      newGrid[index] = 'green'; 
      setGrid(newGrid);

      const newClickOrder = [...clickOrder, index]; 
      setClickOrder(newClickOrder);

      
      if (newClickOrder.length === 9) {
        changeColorsToOrange(newClickOrder, newGrid);
      }
    }
  };

  const changeColorsToOrange = (order, newGrid) => {
    order.forEach((index, i) => {
      setTimeout(() => {
        newGrid[index] = 'orange'; 
        setGrid([...newGrid]); 
      }, i * 500); 
    });
  };

  return (
    <div className="grid-container">
      {grid.map((color, index) => (
        <div
          key={index}
          className="grid-box"
          style={{ backgroundColor: color || 'lightgrey' }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Color;
