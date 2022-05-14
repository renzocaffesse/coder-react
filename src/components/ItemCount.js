import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleSubstract = () => {
    if (count > initial) {
      setCount((counter) => counter - 1);
    }
  };
  const handleAdd = () => {
    if (count < stock) {
      setCount((counter) => counter + 1);
    }
  };

  return (
    <div className="items-center">
      <div className="py-4 flex justify-center items-center">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={handleSubstract}>-</button>
        <span className="mx-8">{count}</span>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={handleAdd}>+</button>
      </div>
      <div className="flex justify-center">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;