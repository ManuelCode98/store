import { http } from '../../../index';



const verificationCodeCreateUserService = async( email:string ) => {
 
    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;
    let message:string = ''
    
    try {
        
        // const emailIsValid:boolean = email.includes('@');

        // if( !emailIsValid ){
        //     message = `Este ${email} no es un correo valido...`;  
        //     return
        // } 

        const createCode = await http.post(`${urlConnectionBanckend}api/send-email-create-user`,{ email })

        if( !createCode ){
            message = `No fue posible enviar un codigo a este correo ${email} ...`;
            return 
        } 

        message = `Codigo enviado al correo ${email}`;
        return message;

    } catch (error:any) {
        
        message = error.message;
        console.log(error);
        return message;
    }

}

export default verificationCodeCreateUserService
