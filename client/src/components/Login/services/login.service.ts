import { http } from '../../../../index';



interface User {
    email: string;
    password: string;
}

const loginService = async( formData:User ) => {

  const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;

  let success:string = '';
  let error:string = '';
  let loading: boolean = false;
  let statusText = '';
  let status = 409;

  try {
      const response = await http.post(`${urlConnectionBanckend}api/login`, formData);
      // const { token, user } = response.data;
      
      // Guardar token en localStorage
      // Todo aca debemos manejar, si lo mandamos al la dashboard o no, depende de si el token esta activo o no
      if( response.statusText === 'OK' && response.status === 200 ){

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Redirigir al dashboard pero desde el componente para poder usar el useNavigate
        // console.log(response);

        success = '¡Inicio de sesion exitoso!';
        statusText = response.statusText;
        status = response.status;
      }
      
    } catch (err: any) {

      error = err.response?.data?.message || 'Error al iniciar sesión';

    } finally {
      loading = false;
    }

  return { 
    success,
    error,
    loading,
    statusText,
    status
  }


};

   
  

export default loginService
