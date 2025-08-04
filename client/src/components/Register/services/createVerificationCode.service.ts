import { http } from '../../../../index';



const createVerificationCodeService = async( email:string ) => {
 
    const urlConnectionBanckend:string = import.meta.env.VITE_CONNECTION_DB;

    try {
        
        const emailIsValid:boolean = email.includes('@');

        if( !emailIsValid ) return;

        const createCode = await http.post(`${urlConnectionBanckend}api/send-email`,{ email })

        if( !createCode ) return

        return { message: `Codigo enviado al correo ${email}` };

    } catch (error) {
        
        console.log(error);
    }

}

export default createVerificationCodeService
