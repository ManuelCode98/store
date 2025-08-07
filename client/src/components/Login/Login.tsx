import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from '../../../index';
import loginService from './services/login.service';
import './Login.css';
import Header from '../Header/Header';


interface LoginFormData {
  email: string;
  password: string;
}

interface LocalStorage {
    getToken: string | null;
    getUser: string | null;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [ activeLoginState, setActiveLoginState ] = useState<LocalStorage>({ getToken: null, getUser: null });
  
  useEffect(() => {
      const getToken = localStorage.getItem('token');
      const getUser = localStorage.getItem('user');
      
      setActiveLoginState( { getToken, getUser } )
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { statusText, status, error , loading } = await loginService( formData );

    setError(error);
    setLoading(loading);
    
    if( statusText === 'OK' && status === 200 ){

      navigate('/dashboard');
    }

  };

  return (
    <div >
      <>
        <Header/>
      </>
      {
        activeLoginState.getToken && activeLoginState.getUser 
          ? <span>Ya tienes una sesion iniciada</span>
          :
          <div >
            <div className='container-login-title'>
              <h2 className='login-title'>
                Iniciar Sesión
              </h2>
            </div>
            
            {error && (
              <div className='login-message-error'>
                {error}
              </div>
            )}

            <form className='container-form-login' onSubmit={handleSubmit}>
              <div >
                <div className='container-email'>
                  <label htmlFor="email" >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div className='container-password'>
                  <label htmlFor="password" >
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className='container-login-button'>
                <button
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading-spinner-container">
                      <svg className="loading-spinner" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle className="spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="spinner-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Iniciando...
                    </span>
                  ) : (
                    <span className="login-spinner-container">
                      Iniciar Sesión
                    </span>
                    
                  )}
                </button>
              </div>
            </form>

            <div className='container-login-options'>
              <p className='paragraph login-register'>
                ¿No tienes cuenta?{' '}
                <Link 
                  to="/register" 
                >
                  Regístrate aquí
                </Link>
              </p>
              <p className='paragraph login-recover-password'>
                ¿Olvidaste tu contraseña?{' '}
                <Link 
                  to="/recover-password" 
                >
                  Recuperala aquí
                </Link>
              </p>
            </div>
          </div>
      }
    </div>
      
  );
};

export default Login;