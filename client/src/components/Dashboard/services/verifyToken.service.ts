import { http } from '../../../../index'



const verifyTokenService = async() => {
 
    

    try {
        const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;
        // let redirect:boolean = false;
        const token = localStorage.getItem( 'token' );
        const result = await http.get(`${urlConnectionBanckend}api/verify-token`,{
            headers : {
                'authorization': `Bearer ${token}`
            }
        });

        return { status: result.status, statusText :result.statusText, success: true  }

    } catch (error:any) {

        // console.log(error.response.status);
        // if( error.response.status ){

        //     localStorage.removeItem('token');
        //     localStorage.removeItem('user');

        //     return error.response
        // }
        return { success: false }
    }
    finally{}
    

    // if( status === 401 ){

    //     localStorage.removeItem('token');
    //     localStorage.removeItem('user')

    //     // redirect = true;
    // }


    // return {status};

}

export default verifyTokenService
