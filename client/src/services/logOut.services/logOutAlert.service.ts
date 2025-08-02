import { swal } from '../../../index';
import logOutService from './logOut.service';


const logOutAlertService = async( navigate:any ) => {
 
    // let confirmed:boolean = false;

    const confirmed = swal.fire({
    title: 'Seguro que quieres cerrar sesión',
    showConfirmButton: true,
    showCancelButton: true,

   }) 
   .then(( {isConfirmed} )=>{
        
        if( isConfirmed ){
            
            (async()=>{ 

                const message = await logOutService();

                if( message === 'Sesión cerrada correctamente.' ){
        
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate( '/login' );
                    ;
                }

            })();
            // localStorage.removeItem('token');
            // localStorage.removeItem('user');

            // confirmed = true;
            // return confirmed;
            return isConfirmed;
        }
        navigate( '/dashboard' );
        return isConfirmed;
    // console.log(confirmed);
    // //    return confirmed;
   })

   return confirmed;
 
}

export default logOutAlertService
