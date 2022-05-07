import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const categories = [
    { id: 'home', address: '/', text: 'The Gadget Zone' },
    { id: 'notebooks', address: '/category/notebooks', text: 'NOTEBOOKS' },
    { id: 'parlantes', address: '/category/parlantes', text: 'PARLANTES' },
    { id: 'telefonos', address: '/category/telefonos', text: 'TELEFONOS' },
  ];
    return (
        <>
          <header className="sticky top-0 shadow-md text-gray-600 body-font bg-yellow-100 font-serif z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              {categories.map((cat) => {
                return (
                    <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-medium tracking-wider justify-center hover:cursor-pointer" key={cat.id}>
                      {/* <NavLink to={cat.address} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:cursor-pointer">
                        <span className="font-style: italic text-2xl text-yellow-600">The Gadget Zone</span>
                      </NavLink> */}
                        <NavLink to={cat.address} className="text-lg mx-5 hover:text-gray-900 ">{cat.text}</NavLink>
                    </div>
                )})}
              <button className="text-sm flex items-end space-x-2 hover:text-gray-900">
                <CartWidget />
                <p>Revisar mi compra</p>
              </button>
            </div>
          </header>
        </>
    )
}

export default Navbar