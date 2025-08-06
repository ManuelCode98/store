import { nodemailer } from "../../../allImports";



const sendEmailService = ( emailClient:string, code:string ) => {
 
    const emailUser = process.env.EMAIL_USER;
    const emailAppPassword = process.env.EMAIL_APP_PASSWORD;

    try {
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailAppPassword
            }
        })

        const mailOptions = {
            from: emailUser,
            to: emailClient,
            subject: 'Codigo de verificación para la creacion de cuenta en FITNESS MATI',
            text: `
            Copia y pega este codigo para seguir con la creacion de la cuenta ${code}, si no lo solicitaste ignora este mensaje...
            `
        };

        const sendCode = transporter.sendMail( mailOptions, ( error, info )=>{

            if( error ){
                console.log(error);
                return
            }

            return { message: `Se envio el codigo al correo ${emailClient}` }
        })


    } catch (error) {

        console.log(error);
        return error
    }
   

}

export default sendEmailService
