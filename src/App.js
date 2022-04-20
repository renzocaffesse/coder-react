import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting='Hola Gabriel! Y hasta el próximo Sábado!'></ItemListContainer>
    </>
  );
}

export default App;
