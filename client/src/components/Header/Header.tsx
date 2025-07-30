import { Link, useLocation } from '../../../index';

const Header = () => {

    const location = useLocation();
    const currentPaht = location.pathname;



  return (
        <div className="header-home-page">
            { currentPaht !== 'dashboard' 
                ? 
                <>
                    { currentPaht === '/' ? '' : <Link to={'/'} >Inicio</Link> }
                    { currentPaht === '/login' ? '' : <Link to={'/login'} >Iniciar sesión</Link> }
                    { currentPaht === '/register' ? '' : <Link to={'/register'}>Crear cuenta</Link> }
                    { currentPaht === '/dashboard' ? '' : <Link to={'/dashboard'}>Dashboard</Link> }  
                </>
                :   
                <>
                    <Link to={'/'} >Inicio</Link>
                    <Link to={'/'}>Cerrar sesión</Link>
                </>  
            }
          
        </div>
  )
}

export default Header
