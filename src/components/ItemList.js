import Item from './Item';

const ItemList = ({items}) => {

  return (
    <div className="w-full h-96 flex flex-wrap justify-center">
      {items.map( item => <Item key={item.id} {...item} />)}
    </div>
  )

}

export default ItemList
