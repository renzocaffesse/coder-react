import { useState } from 'react';
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount';

// import useCartContext from '../context/CartContext'

export const ItemDetail = ({
  id,
  image,
  brand,
  model,
  specs,
  price,
  stock
}) => {

  // const { addItem } = useCartContext();

  const [comprado, setComprado] = useState(false);

  const onAdd = (value) => {
    setComprado(true);
    // addItem(id, value)
  };

  return (
    <div className="h-screen w-screen flex">
      <div className="w-full flex-col">
        <div className="flex-col px-8">
          <img src={image} alt={`${id}-${model}`} className="" />
          <h1 className="pl-16">{brand}</h1>
          <p className="pl-16">{model}</p>
          <p className="pl-16">{specs}</p>
          <h2 className="pl-16">${price}</h2>
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
