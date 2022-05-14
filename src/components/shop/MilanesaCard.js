import React from 'react'

function MilanesaCard({item: m}) {
  return (
    <div>
      <div>{m.id}</div>
      <div>{m.title}</div>
      <div>{m.description}</div>
      <div>{m.price}</div>
      <div>{m.stock}</div>
    </div>)
}

export default MilanesaCard
