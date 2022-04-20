import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <>
            <header className="sticky top-0 shadow-md text-gray-600 body-font bg-yellow-100 font-serif">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:cursor-pointer">
                  <span className="font-style: italic text-2xl text-yellow-600">The Gadget Zone</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-medium tracking-wider justify-center hover:cursor-pointer">
                  <a className="text-lg mx-5 hover:text-gray-900 ">NOTEBOOKS</a>
                  <a className="text-lg mx-5 hover:text-gray-900 ">CONSOLAS</a>
                  <a className="text-lg mx-5 hover:text-gray-900 ">PARLANTES</a>
                  <a className="text-lg mx-5 hover:text-gray-900 ">TELEFONOS</a>
                </nav>
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
