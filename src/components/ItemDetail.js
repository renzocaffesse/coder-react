import React from 'react';

export const ItemDetail = ({
  id,
  brand,
  category,
  model,
  specs,
  price,
}) => {
  return (
    <div className="detail-row">
      {/* <img src={image} alt={`${id}-${name}`} className="flex-col" /> */}
      <div className="flex-col">
        <h1>{brand}</h1>
        <p>{model}</p>
        <p>{specs}</p>
        <h2>${price}</h2>
      </div>
    </div>
  );
};
