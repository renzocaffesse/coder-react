import { IconContext } from "react-icons";
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CartWidget = () => {
    return (
      <IconContext.Provider value={{ size: "2em" }}>
        <div>
          <AiOutlineShoppingCart />
        </div>
      </IconContext.Provider>
    )
}

export default CartWidget
