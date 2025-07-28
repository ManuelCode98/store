import { http } from '../../../../index';


interface User {
    name: string;
    email: string;
    password: string;
}

const registerService = async( formData:User ) => {

    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;

    let success:string = '';
    let error:string = '';
    let loading: boolean = false;

    try {
          const { name, email, password } = formData;
          const response = await http.post(`${urlConnectionBanckend}api/register`, { name, email, password });
        //   const { token, user } = response.data;
          
          // Guardar token en localStorage
        //   localStorage.setItem('token', token);
        //   localStorage.setItem('user', JSON.stringify(user));
          
        //   setSuccess('¡Cuenta creada exitosamente!');
          success = '¡Cuenta creada exitosamente!';
          
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
        loading
    }

}

export default registerService
