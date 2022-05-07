import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:catId' element={<ItemListContainer />} />
          <Route path='/product/:itemId' element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
