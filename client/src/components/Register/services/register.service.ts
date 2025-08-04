import { http } from '../../../../index';


interface User {
    name: string;
    email: string;
    password: string;
    verificationCode: number
}

const registerService = async( formData:User ) => {

    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;

    let success:boolean = false;
    let error:string = '';
    let loading: boolean = false;
    let message: string = '';

    try {
          const { name, email, password, verificationCode } = formData;

          // todo Pendiente en hacer esta validacion para que no se envien campos vacios al backend
          // if( !name && !email && !password && !verificationCode ) return;

          const response = await http.post(`${urlConnectionBanckend}api/register`, { name, email, password, verificationCode });
        //   const { token, user } = response.data;
          
          // Guardar token en localStorage
        //   localStorage.setItem('token', token);
        //   localStorage.setItem('user', JSON.stringify(user));
          
        //   setSuccess('¡Cuenta creada exitosamente!');
          success = response.data.success;
          message = response.data.message;
          // Redirigir después de 1 segundo
        //   setTimeout(() => {
        //     navigate('/dashboard');
        //   }, 1000);

        } catch (err: any) {
        
            error = err.response?.data?.message || 'Error al crear la cuenta';
        //   setError(err.response?.data?.message || 'Error al crear la cuenta');
        } finally {
        //   setLoading(false);
          loading = false;
        }

    return { 
        success,
        error,
        loading,
        message
    }

}

export default registerService
