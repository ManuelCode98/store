import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from '../../../index';
import logOutAlertService from '../../services/logOut.services/logOutAlert.service';
import './Header.css';


interface LocalStorage {
    getToken: string | null;
    getUser: string | null;
}

const Header = () => {

    const location = useLocation();
    const currentPaht = location.pathname;
    const navigate = useNavigate();
    const [ activeLoginState, setActiveLoginState ] = useState<LocalStorage>({ getToken: null, getUser: null });

    useEffect(() => {
        const getToken = localStorage.getItem('token');
        const getUser = localStorage.getItem('user');
        
        setActiveLoginState( { getToken, getUser } )
    }, []);
    

  return (
        <div className="header-home-page">
            { currentPaht === '/' && activeLoginState.getToken && activeLoginState.getUser
                ? 
                    <>
                        <Link to={'/dashboard'} >Dashboard</Link> 
                        <Link to={''} onClick={ () => logOutAlertService( navigate ) }>Cerrar sesión</Link>
                    </>
                : currentPaht === '/' && !activeLoginState.getToken && !activeLoginState.getUser &&
                    <>
                        <Link to={'/login'} >Iniciar sesión</Link>
                        <Link to={'/register'}>Crear cuenta</Link>
                    </>
            }

            { currentPaht === '/login' && activeLoginState.getToken  && activeLoginState.getUser
                ? 
                    <>
                        <Link to={'/'} >Inicio</Link> 
                        <Link to={'/dashboard'} >Dashboard</Link> 
                        <Link to={''} onClick={ () => logOutAlertService( navigate ) }>Cerrar sesión</Link>
                    </>
                : currentPaht === '/login' && !activeLoginState.getToken  && !activeLoginState.getUser &&
                    <>
                        <Link to={'/'} >Inicio</Link>
                        <Link to={'/register'}>Crear cuenta</Link>
                    </>
            }

            { currentPaht === '/register' && activeLoginState.getToken && activeLoginState.getUser
                ? 
                    <>
                        <Link to={'/'} >Inicio</Link>
                        <Link to={'/dashboard'} >Dashboard</Link> 
                        <Link to={''} onClick={ () => logOutAlertService( navigate ) }>Cerrar sesión</Link>
                    </>
                : currentPaht === '/register' && !activeLoginState.getToken && !activeLoginState.getUser &&
                    <>
                        <Link to={'/'} >Inicio</Link>
                        <Link to={'/login'} >Iniciar sesión</Link>
                    </>
            }
            { currentPaht === '/recover-password' && activeLoginState.getToken  && activeLoginState.getUser
                ? 
                    <>
                        <Link to={'/'} >Inicio</Link> 
                        <Link to={'/dashboard'} >Dashboard</Link> 
                        <Link to={''} onClick={ () => logOutAlertService( navigate ) }>Cerrar sesión</Link>
                    </>
                : currentPaht === '/recover-password' && !activeLoginState.getToken  && !activeLoginState.getUser &&
                    <>
                        <Link to={'/'} >Inicio</Link>
                        <Link to={'/login'} >Iniciar sesión</Link>
                        <Link to={'/register'}>Crear cuenta</Link>
                    </>
            }

            { currentPaht === '/dashboard' && activeLoginState.getToken  && activeLoginState.getUser
                ? 
                    <>
                        <Link to={'/'} >Inicio</Link> 
                        <Link to={''} onClick={ () => logOutAlertService( navigate ) }>Cerrar sesión</Link>
                    </>
                : currentPaht === '/dashboard' && !activeLoginState.getToken  && !activeLoginState.getUser &&
                    <>
                        <Link to={'/'} >Inicio</Link>
                        <Link to={'/login'} >Iniciar sesión</Link>
                        <Link to={'/register'}>Crear cuenta</Link>
                    </>
            }         
        </div>
  )
}

export default Header
