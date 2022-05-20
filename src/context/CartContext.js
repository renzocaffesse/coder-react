import { useState, useContext, createContext } from "react";

export const CartContext = createContext({})

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ defaultValue=[], children }) => {
  const [cart, setCart] = useState(defaultValue)

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity}
        } else return cartItem
      })
      setCart(updatedCart)
    } else {
      setCart((prev) => [...prev, {...item, quantity}])
    }
  }

  const clearCart = () => setCart({})

  const isInCart = (id) => cart.some(item => item.id === id)

  const removeItem = (id) => setCart(cart.filter(item => item.id !== id))

  return (
    <CartContext.Provider value={{cart, setCart, addItem, clearCart, isInCart, removeItem}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider