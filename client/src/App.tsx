import CreateProduct from './components/CreateProduct/CreateProduct';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const styleH2 = { 
    margin: '0 auto', 
    paddingBottom: '20px'
  }

  return (
    <>
      <div>
        <h2 className='subtitle' >Añadir un nuevo producto al inventario</h2>
        <CreateProduct/>
      </div>

      <div>
        <h2 className='subtitle' >Actualizar un nuevo producto al inventario</h2>
        <SearchBar/>
        <CreateProduct/>
      </div>
    </>
  )
}

export default App
