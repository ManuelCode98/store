import CreateProduct from './components/CreateProduct/CreateProduct';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';



function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<SearchBar/>}/> */}
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/recover-password' element={<RecoverPassword/>}/>
        </Routes>
      </Router>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <div>
        <h2 className='subtitle' >Añadir un nuevo producto al inventario</h2>
        <CreateProduct/>
      </div> */}

      {/* <div>
        <h2 className='subtitle' >Actualizar un nuevo producto al inventario</h2>
        <SearchBar/> */}
        {/* <UpdateProduct/> */}
      {/* </div> */}
    </>
  )
}

export default App
