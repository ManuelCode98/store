import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
import { Link, useNavigate } from '../../../index';
import registerService from './services/register.service';
import './Register.css';
import Header from '../Header/Header';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  verificationCode: number;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    verificationCode:0, 
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [buttonVerificationCode, setButtonVerificationCode] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = (): boolean => {
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return false;
    }
    
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError('');
    setSuccess('');

    const { success, error, loading } =  await registerService( formData );

    setSuccess(success);

    setError(error);

    setLoading(loading);

    // Redirigir después de 1 segundo
    if( success === '¡Cuenta creada exitosamente!' ){

      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
    // try {
    //   const { name, email, password } = formData;
    //   const response = await http.post('/api/auth/register', { name, email, password });
    //   const { token, user } = response.data;
      
    //   // Guardar token en localStorage
    //   localStorage.setItem('token', token);
    //   localStorage.setItem('user', JSON.stringify(user));
      
    //   setSuccess('¡Cuenta creada exitosamente!');
      
    //   // Redirigir después de 1 segundo
    // //   setTimeout(() => {
    // //     navigate('/dashboard');
    // //   }, 1000);
    // } catch (err: any) {
    //   setError(err.response?.data?.message || 'Error al crear la cuenta');
    // } finally {
    //   setLoading(false);
    // }
  };

    

  return (
    <div >
      <>
        <Header/>
      </>
      <div >
        <div>
          <h2 >
            Crear Cuenta
          </h2>
          <p >
            Únete a nuestra plataforma
          </p>
        </div>
        
        {(error || success) && (
          <div className={`border px-4 py-3 rounded-lg ${
            error ? 'bg-red-50 border-red-200 text-red-700' : 'bg-green-50 border-green-200 text-green-700'
          }`}>
            {error || success}
          </div>
        )}

        <form className='container-form-register' onSubmit={handleSubmit}>
          <div >
            <div>
              <label htmlFor="name" >
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
              />
            </div>
            
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
            
            <div>
              <label htmlFor="confirmPassword" >
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>

            <div>
              
              {
                !buttonVerificationCode 
                ? 
                <>
                  <button onClick={ ()=> setButtonVerificationCode( true ) }>
                    Obtener el codigo de verificación
                  </button><br/>
                </>
                :
                <>
                  <label htmlFor="verificationCode" >
                    Escribe el codigo de verificacion que llego a tu correo
                  </label>
                  <input
                    id="verificationCode"
                    name="verificationCode"
                    type="number"
                    required
                    value={ formData.verificationCode}
                    onChange={handleChange}
                    placeholder="2223"
                  />
                  <button>
                    Enviar nuevamente
                  </button>
                </>

              }
              
            </div>

          </div>

          <div>
            {
             formData.verificationCode < 1 
              ? ''
              : 
              <>
                <button
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span >
                      {/* <svg >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg> */}
                      Creando cuenta...
                    </span>
                  ) : (
                    'Crear Cuenta'
                  )}
                </button>
              </>
            }
            
          </div>
        </form>

        <div >
          <p>
            ¿Ya tienes una cuenta?{' '}
            <Link 
              to="/" 
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;