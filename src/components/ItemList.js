import {useState, useEffect} from 'react'
import { laptops as laptopData } from '../data/laptops';
import Item from './Item';

const ItemList = () => {
  const [laptops, setLaptops] = useState([])
  useEffect(() => {
    const getLaptops = new Promise((resolve)=> {
      setTimeout(() => {
        resolve(laptopData)
      }, 3000);
    })

    getLaptops.then((result)=> {
      setLaptops(result)
    }).catch((err) => {
      console.log('No se pudo cargar la información!', err);
    })

  }, [])

  return (
    <div className="w-full h-96 flex flex-wrap justify-center">
      {laptops.map( laptop => <Item key={laptop.id} laptopData={laptop} />)}
    </div>
  )

}

export default ItemList
