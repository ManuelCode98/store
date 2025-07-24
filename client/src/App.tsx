import CreateProduct from './components/CreateProduct/CreateProduct';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';

function App() {

  return (
    <>
      {/* <Dashboard/> */}
      <Login/>
      <Register/>
      <div>
        <h2 className='subtitle' >Añadir un nuevo producto al inventario</h2>
        <CreateProduct/>
      </div>

      <div>
        <h2 className='subtitle' >Actualizar un nuevo producto al inventario</h2>
        <SearchBar/>
        {/* <UpdateProduct/> */}
      </div>
    </>
  )
}

export default App
