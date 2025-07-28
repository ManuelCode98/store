import { http } from '../../../../index'



const verifyTokenService = async() => {
 
    

    try {
        const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;
        // let redirect:boolean = false;
        const token = localStorage.getItem( 'token' );
        await http.get(`${urlConnectionBanckend}api/verify-token`,{
            headers : {
                'authorization': `Bearer ${token}`
            }
        });


    } catch (error:any) {

        // console.log(error.response.status);
        if( error.response.status ){

            localStorage.removeItem('token');
            localStorage.removeItem('user');

            return error.response
        }
    }
    

    // if( status === 401 ){

    //     localStorage.removeItem('token');
    //     localStorage.removeItem('user')

    //     // redirect = true;
    // }


    // return {status};

}

export default verifyTokenService
