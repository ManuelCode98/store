import { useEffect, useState } from 'react';
import { Link, useNavigate } from '../../../index';
import Header from '../Header/Header';
import verificationCodeRecoverPasswordService from '../../services/createVerificationCode.services/verificationCodeRecoverPassword.service';
import recoverPasswordService from './services/recoverPassword.service';
import './RecoverPassword.css';

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  verificationCode: number;
}

interface LocalStorage {
    getToken: string | null;
    getUser: string | null;
}

const RecoverPassword = () => {
   const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    verificationCode:NaN, 
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [buttonVerificationCode, setButtonVerificationCode] = useState<boolean>(false);
  const navigate = useNavigate();
  const [ activeLoginState, setActiveLoginState ] = useState<LocalStorage>({ getToken: null, getUser: null });
    
    useEffect(() => {
        const getToken = localStorage.getItem('token');
        const getUser = localStorage.getItem('user');
        
        setActiveLoginState( { getToken, getUser } )
    }, []);

  
  const emailContainsAtSign:boolean = formData.email.includes( '@' );

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
    setSuccess(false);
    setMessage('');

    // Todo aca debemos de llamar al servicio que va a enviar los datos
    const { success, error, loading, message } =  await recoverPasswordService( formData );

    setSuccess(success);

    setError(error);

    setLoading(loading);

    setMessage(message);

    console.log({ success, error, loading, message});

    // Redirigir después de 1 segundo
    if( success ){

      setTimeout(() => {
        navigate('/login');
      }, 1000);
    }
  };

  const verificationCode = ()=>{ 

    setButtonVerificationCode( true );

    // Todo aca va el servicio que envia el email para generar el codigo a dicho email
    verificationCodeRecoverPasswordService( formData.email );
  };


  return (
    <div >
      <>
        <Header/>
      </>
      {
        activeLoginState.getToken && activeLoginState.getUser 
          ? <span>Ya tienes una sesion iniciada, cierra sesion y vuelve a intentarlo</span>
          :
          <div >
            <div className='container-recover-password-title'>
              <h2 className='recover-password-title'>
                Recuperar contraseña
              </h2>
            </div>
            
            {(error || success) && (
              <div  className='recover-password-message-error'>
                {error || success}
              </div>
            )}

            <form className='container-form-recover-password' onSubmit={handleSubmit}>
              <div >
                
                <div className='container-recover-password-email'>
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
                
                <div className='container-recover-password-password'>
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
                
                <div className='container-recover-password-confirm-password'>
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

                { emailContainsAtSign 
                  ?  
                  <div className='container-recover-password-code'>
                  {
                    !buttonVerificationCode 
                    ? 
                      <button className='recover-password-spinner-container' onClick={ verificationCode }>
                        Obtener el codigo de verificación
                      </button>
                    :
                    <div className='container-recover-password-insert-code'>
                      <label htmlFor="verificationCode" >
                        Escribe el codigo que enviamos a <span style={{ 'color': 'blue' }}> { formData.email } </span>
                      </label>
                      <input
                        id="verificationCode"
                        name="verificationCode"
                        type="number"
                        required
                        value={ formData.verificationCode}
                        onChange={handleChange}
                        placeholder="220223"
                      />
                      <button className='recover-password-spinner-container' onClick={ verificationCode }>
                        Enviar nuevamente
                      </button>
                    </div>

                  }
                  
                </div>
                : ''
                }
                

              </div>

              <div className='container-recover-password'>
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
                        <span className="loading-spinner-container">
                      <svg className="loading-spinner" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle className="spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="spinner-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Cargando...
                    </span>
                  ) : (
                    <span className="recover-password-spinner-container">
                      Cambiar contraseña
                    </span>
                      )}
                    </button>
                  </>
                }
                
              </div>
            </form>

            <div className='container-recover-password-options'>
              <p className='paragraph recover-password-login'>
                ¿Ya tienes una cuenta?{' '}
                <Link 
                  to="/login" 
                >
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </div>
      }
      
    </div>
  );
}

export default RecoverPassword
