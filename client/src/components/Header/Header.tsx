import { Link, useLocation, useNavigate } from '../../../index';
import logOutAlertService from '../../services/logOut.services/logOutAlert.service';


const Header = () => {

    const location = useLocation();
    const currentPaht = location.pathname;
    const navigate = useNavigate();


  return (
        <div className="header-home-page">
            { currentPaht !== 'dashboard' 
                ? 
                <>
                    { currentPaht === '/' ? '' : <Link to={'/'} >Inicio</Link> }
                    { currentPaht === '/login' ? '' : <Link to={'/login'} >Iniciar sesión</Link> }
                    { currentPaht === '/register' ? '' : <Link to={'/register'}>Crear cuenta</Link> }
                    { currentPaht === '/recover-password' ? '' : <Link to={'/recover-password'}>Recuperar contraseña</Link> }
                    { currentPaht === '/dashboard' ? '' : <Link to={'/dashboard'}>Dashboard</Link> }  
                    { currentPaht === '/dashboard' ? <Link to={''} onClick={ () => logOutAlertService( navigate ) }>Cerrar sesión</Link> : '' }  
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
