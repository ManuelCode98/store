import { http, swal } from '../../../index';


const logOutService = async() => {
    
    try {
        
        const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;
        const token = localStorage.getItem('token');
        
        const { data } = await http.post(`${urlConnectionBanckend}api/log-out`,{},{
            headers: {
                'authorization':`Bearer ${token}`
            }
        })
       
        return data.message;
    } catch (error) {
        console.log(error);
    }
    // console.log(sendToken);
    // message: 'Sesión cerrada correctamente.'
}

export default logOutService
