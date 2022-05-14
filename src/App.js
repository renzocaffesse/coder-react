import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
// import MilanesaNapolitana from './components/shop/MilanesaNapolitana';
// import Milanesas from './components/shop/Milanesas';

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:catId' element={<ItemListContainer />} />
            <Route path='/product/:itemId' element={<ItemDetailContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
            {/* <Route path='/milanesa' element={<MilanesaNapolitana />} />
            <Route path='/milanesas' element={<Milanesas />} /> */}
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
