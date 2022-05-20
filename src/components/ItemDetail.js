import { useState } from 'react';
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount';

import { useCartContext } from '../context/CartContext'

export const ItemDetail = ({
  id,
  image,
  brand,
  model,
  specs,
  price,
  stock
}) => {

  const { addItem } = useCartContext();

  const [comprado, setComprado] = useState(false);

  const onAdd = (value) => {
    setComprado(true);
    addItem({id, image, brand, model, specs, price, stock}, value)
  };

  return (
    <div className="h-screen w-screen flex">
      <div className="w-full flex-col">
        <div className="flex-col px-8 pb-8 items-center flex">
          <img src={image} alt={`${id}-${model}`} className="my-8 w-96" />
          <div className="text-xl font-semibold">
            <h1 className=""><span className="text-2xl font-light">Brand: </span>{brand}</h1>
            <p className=""><span className="text-2xl font-light">Model: </span>{model}</p>
            <p className=""><span className="text-2xl font-light">Specs: </span>{specs}</p>
            <h2 className=""><span className="text-2xl font-light">Price: </span>${price}</h2>
          </div>
        </div>
        <div className="px-8">
          {comprado ? (
            <div className="mt-20 flex justify-center">
              <Link to="/cart" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Terminar compra</Link>
            </div>
          ) : (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};
