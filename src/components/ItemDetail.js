import React from 'react';

export const ItemDetail = ({
  id,
  image,
  brand,
  model,
  specs,
  price,
}) => {
  return (
    <div className="w-screen flex">
      <div className="w-96 flex justify-center items-center">
        <div className="w-full px-8">
          <img src={image} alt={`${id}-${model}`} className={'w-64'} />
          <h1>{brand}</h1>
          <p>{model}</p>
          <p>{specs}</p>
          <h2>${price}</h2>
        </div>
      </div>
    </div>
  );
};
