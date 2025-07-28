import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import http from 'axios';
import { Link, useNavigate } from '../../../index';
import loginService from './services/login.service';
import './Login.css';


interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [statusText, setStatusText] = useState('');
  const [status, setStatus] = useState(409);
  const navigate = useNavigate();

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


    const { statusText, status, success, error , loading } = await loginService( formData );

    setError(error);
    setLoading(loading);
    // setStatusText(statusText);
    // setStatus(status);
    
    if( statusText === 'OK' && status === 200 ){

      navigate('/dashboard');
    }

  //   try {
  //     const response = await http.post('/api/auth/login', formData);
  //     const { token, user } = response.data;
      
  //     // Guardar token en localStorage
  //     localStorage.setItem('token', token);
  //     localStorage.setItem('user', JSON.stringify(user));
      
  //       // Redirigir al dashboard
  //       // navigate('/dashboard');
  //   } catch (err: any) {
  //     setError(err.response?.data?.message || 'Error al iniciar sesión');
  //   } finally {
  //     setLoading(false);
  //   }
  };

  return (
    <div >
      <div >
        <div>
          <h2 >
            Iniciar Sesión
          </h2>
          <p >
            Accede a tu cuenta
          </p>
        </div>
        
        {error && (
          <div >
            {error}
          </div>
        )}

        <form className='container-form-login' onSubmit={handleSubmit}>
          <div >
            <div>
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
            
            <div>
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

          {/* <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link 
                to="/forgot-password" 
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div> */}

          <div>
            <button
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span >
                  <svg >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Iniciando...
                </span>
              ) : (
                'Iniciar Sesión'
              )}
            </button>
          </div>
        </form>

        <div >
          <p>
            ¿No tienes cuenta?{' '}
            <Link 
              to="/register" 
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;