import { http, swal } from '../../../../index';


interface User {
    email: string;
    password: string;
    verificationCode: number
}

const recoverPasswordService = async( formData:User ) => {

    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;

    let success:boolean = false;
    let error:string = '';
    let loading: boolean = false;
    let message: string = '';

    try {
          const { email, password, verificationCode } = formData;

          // todo Pendiente en hacer esta validacion para que no se envien campos vacios al backend
          // if( !email && !password && !verificationCode ) return;

          const response = await http.post(`${urlConnectionBanckend}api/recover-password`, { email, password, verificationCode });
        
          success = response.data.success;
          message = response.data.message;

          swal.fire({
            title: 'Genial',
            text: `${error}`, 
            icon: 'success'
          })

        } catch (err: any) {
        
            error = err.response?.data?.message || 'Error al recuperar la contraseña';

            swal.fire({
              title: 'Error',
              text: `${error}`,
              icon: 'error' 
            })
       
        } finally {
          loading = false;
        }

    return { 
        success,
        error,
        loading,
        message
    }

}

export default recoverPasswordService
