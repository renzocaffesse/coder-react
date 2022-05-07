import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'
import { products } from '../data/products';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve)=> {
      setTimeout(() => {
        const myData = catId
          ? products.filter((item) => item.category === catId)
          : products;
        resolve(myData);
      }, 1000);
    })

    getItems.then((res)=> {
      setItems(res)
    }).catch((err) => {
      console.log('No se pudo cargar la información!', err);
    }).finally(() => setLoading(false));

  }, [catId])

    return (
      loading ? (
        <h2>CARGANDO...</h2>
      ):
      <div className="w-full text-4xl flex min-h-screen">
        <ItemList items={items}/>
      </div>
    )
}

export default ItemListContainer
